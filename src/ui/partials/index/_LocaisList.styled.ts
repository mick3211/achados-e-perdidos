import { styled } from '@mui/material';

export const ListStyled = styled('ul')`
    padding: 0;
    margin: 0 0 64px 0;
    list-style-type: none;
    margin: 0 auto ${({ theme }) => theme.spacing(4)};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
    align-items: center;

    ${({ theme }) => theme.breakpoints.up('md')} {
        gap: ${({ theme }) => theme.spacing(7)};
    }
`;
