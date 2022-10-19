import { Paper, styled } from '@mui/material';

export const FormContainerStyled = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(2.5)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        padding: ${({ theme }) => theme.spacing(3) + ' ' + theme.spacing(9)};
    }
`;
