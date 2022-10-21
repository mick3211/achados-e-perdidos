import { styled } from '@mui/system';

export const PageTitleWrapper = styled('div')`
    text-align: center;
    margin: ${({ theme }) => theme.spacing(3) + ' ' + 0};

    ${({ theme }) => theme.breakpoints.up('md')} {
        margin: ${({ theme }) => theme.spacing(7) + ' ' + 0};
    }
`;

export const TitleStyled = styled('h4')`
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0;
    line-height: 42px;
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 2.25rem;
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
`;

export const SubTitleStyled = styled('p')`
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0;
    line-height: 21px;

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 1.125rem;
    }
`;
