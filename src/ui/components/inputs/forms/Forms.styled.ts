import { Paper, styled } from '@mui/material';

export const FormContainerStyled = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(2.5)};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        padding: ${({ theme }) => theme.spacing(3.5) + ' ' + theme.spacing(9)};
        gap: ${({ theme }) => theme.spacing(3)};
    }
`;

FormContainerStyled.defaultProps = {
    variant: 'outlined',
    elevation: 0,
};

export const FormSectionTitle = styled('p')`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing(0.75)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        margin-bottom: ${({ theme }) => theme.spacing(0.25)};
        font-size: 1.125rem;
    }
`;

export const ButtonContainer = styled('div')`
    text-align: center;
    margin: ${({ theme }) => theme.spacing(3.5) + ' ' + 0};

    ${({ theme }) => theme.breakpoints.up('md')} {
        margin: ${({ theme }) => theme.spacing(4.5) + ' ' + 0};
    }
`;
