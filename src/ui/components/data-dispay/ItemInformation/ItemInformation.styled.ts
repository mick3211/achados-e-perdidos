import { styled } from '@mui/material';

export const ItemInformationContainer = styled('div')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(4)};
    align-items: center;

    ${({ theme }) => theme.breakpoints.up('md')} {
        gap: ${({ theme }) => theme.spacing(9)};
    }
`;

export const ItemInformationImageWrapper = styled('div')`
    width: 100%;
    height: 84px;
    width: 120px;
    position: relative;

    ${({ theme }) => theme.breakpoints.up('md')} {
        width: 400px;
        height: 278px;
    }
`;

export const ItemInformationTitle = styled('h5')`
    margin-bottom: ${({ theme }) => theme.spacing(0.75)};
    font-size: ${({ theme }) => theme.typography.pxToRem(12)};
    font-weight: 500;
    line-height: 14px;

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: ${({ theme }) => theme.typography.pxToRem(18)};
        margin-bottom: ${({ theme }) => theme.spacing(2)};
        line-height: 21px;
    }
`;

export const ItemInformationDescription = styled('p')`
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.pxToRem(11)};
    line-height: 13px;
    margin: 0;

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: ${({ theme }) => theme.typography.pxToRem(14)};
        line-height: 16px;
    }
`;

export const ActionContainer = styled('div')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.spacing()};

    ${({ theme }) => theme.breakpoints.up('md')} {
        margin-top: ${({ theme }) => theme.spacing(2.5)};
    }
`;
