import { ItemInformation } from '@components/data-dispay/ItemInformation/ItemInformation';
import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Dialog } from '@components/feedback/Dialog/Dialog';
import { SmallButton } from '@components/inputs/Button/Button';
import { Container, CircularProgress, Typography } from '@mui/material';
import { useLocais } from 'data/hooks/pages/useLocais.page';
import { DateService } from 'data/services/DateService';
import { GetStaticProps, NextPage } from 'next';
import { ListStyled } from 'ui/partials/index/_LocaisList.styled';

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            title: 'Objetos',
        },
    };
};

const LocalPage: NextPage = () => {
    const { error, isLoading, objetos, local, isDialogOpen, setIsDialogOpen } =
        useLocais();

    if (isLoading) {
        return (
            <Container sx={{ textAlign: 'center', pt: 8 }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error || local === undefined) {
        return (
            <Container>
                <PageTitle
                    title="Não foi possível realizar a busca"
                    subtitle="Por favor, tente novamente"
                />
            </Container>
        );
    }

    if (objetos?.length === 0) {
        return (
            <Container>
                <PageTitle
                    title="Nenhum objeto encontrado"
                    subtitle={`Não existe nenhum objeto perdido neste local`}
                />
            </Container>
        );
    }

    return (
        <Container>
            <PageTitle
                title={`Objetos perdidos em ${local?.nome}`}
                subtitle="Verifique na lista abaixo se o objeto que perdeu está disponível nesse local"
            />
            <ListStyled>
                {objetos?.map(objeto => (
                    <li key={objeto.id}>
                        <ItemInformation
                            title={objeto.nome}
                            picture={objeto.imagem}
                            description={[
                                objeto.descricao,
                                `Data que o objeto foi cadastrado ${DateService.reverseDate(
                                    objeto.data_cadastro
                                )}`,
                            ]}
                            action={
                                <SmallButton
                                    variant="contained"
                                    onClick={() => setIsDialogOpen(true)}
                                >
                                    Entrar em contato
                                </SmallButton>
                            }
                        />
                    </li>
                ))}
            </ListStyled>
            <Dialog
                title={`Informações de contato de ${local?.nome}`}
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                noCancel
                confirmText="Ok"
            >
                <Typography>{local?.contato}</Typography>
            </Dialog>
        </Container>
    );
};

export default LocalPage;
