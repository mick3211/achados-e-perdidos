import { ItemInformation } from '@components/data-dispay/ItemInformation/ItemInformation';
import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { SmallButton } from '@components/inputs/Button/Button';
import Link from '@components/navigation/Link/Link';
import { CircularProgress, Container } from '@mui/material';
import { useLocaisList } from 'data/hooks/partials/useLocaisList.partial';
import React from 'react';
import { ListStyled } from './_LocaisList.styled';

interface LocaisListProps {
    nomeLocal: string;
}

export const LocaisList: React.FC<LocaisListProps> = ({ nomeLocal }) => {
    const { locais, error, isLoading } = useLocaisList(nomeLocal);

    if (isLoading) {
        return (
            <Container sx={{ textAlign: 'center', pt: 8 }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <PageTitle
                    title="Não foi possível realizar a busca"
                    subtitle="Por favor, tente novamente"
                />
            </Container>
        );
    }

    if (locais?.length === 0) {
        return (
            <Container>
                <PageTitle
                    title="Nenhum local encontrado"
                    subtitle={`Não existe nenhum local com o nome de ${nomeLocal}`}
                />
            </Container>
        );
    }

    return (
        <Container>
            <PageTitle
                title="Locais encontrados"
                subtitle="Clique sobre um local  para ver os objetos que estão disponíveis no setor de achados e perdidos."
            />
            <ListStyled>
                {locais?.map(local => (
                    <li key={local.id}>
                        <ItemInformation
                            title={local.nome}
                            description={[local.endereco]}
                            picture={local.imagem}
                            action={
                                <Link
                                    href={`/locais?id=${local.id}`}
                                    Component={SmallButton}
                                    mui={{
                                        variant: 'contained',
                                        size: 'small',
                                    }}
                                >
                                    Ver objetos
                                </Link>
                            }
                        />
                    </li>
                ))}
            </ListStyled>
        </Container>
    );
};
