import { PageTitle } from '@components/data-dispay/PageTitle/PageTitle';
import { Button } from '@components/inputs/Button/Button';
import Link from '@components/navigation/Link/Link';
import { Box, Container, TextField } from '@mui/material';
import { useState } from 'react';

export const BuscarLocais: React.FC = () => {
    const [nomeLocal, setNomeLocal] = useState('');

    return (
        <Container sx={{ textAlign: 'center' }}>
            <PageTitle
                title="Perdeu um objeto?"
                subtitle="Veja se o local onde perdeu seu objeto já está cadastrado na nossa plataforma."
            />
            <Box sx={{ maxWidth: 568, mx: 'auto' }}>
                <TextField
                    fullWidth
                    placeholder="Digite o nome do local"
                    sx={{ mb: 4.5 }}
                    value={nomeLocal}
                    onChange={ev => setNomeLocal(ev.target.value)}
                />
            </Box>
            <Link
                href={`/?nome_local=${nomeLocal}`}
                Component={Button}
                mui={{ variant: 'contained', disabled: nomeLocal.length === 0 }}
            >
                Buscar
            </Link>
        </Container>
    );
};
