import { styled } from '@mui/material';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

export const TableStyled = styled(Table)``;

export const TableBodyStyled = styled(TableBody)`
    .MuiTableCell-root {
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;

export const TableCellStyled = styled(TableCell)`
    padding: ${({ theme }) => theme.spacing(0.75, 1)};
    font-size: 0.5rem;
    border: 1px solid ${({ theme }) => theme.palette.text.secondary};
    line-height: 9px;

    ${({ theme }) => theme.breakpoints.up('md')} {
        padding: ${({ theme }) => theme.spacing(1.5, 4)};
        font-size: 1rem;
        line-height: 21px;
    }
`;

export const TableHeadStyled = styled(TableHead)`
    .MuiTableCell-root {
        font-weight: 700;
        font-size: 0.625rem;

        ${({ theme }) => theme.breakpoints.up('md')} {
            font-size: 1.125rem;
        }
    }
`;

export const TableRowStyled = styled(TableRow)``;
