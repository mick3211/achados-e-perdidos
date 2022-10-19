import { styled } from '@mui/system';

export const PageTitleWrapper = styled('div')`
    margin-top: ${({ theme }) => theme.spacing(7)};
    text-align: center;
`;

export const TitleStyled = styled('h4')`
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing(0.75)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 2.25rem;
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
`;

export const SubTitleStyled = styled('p')`
    font-size: 0.75rem;
    font-weight: 400;

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 1.125rem;
    }
`;
