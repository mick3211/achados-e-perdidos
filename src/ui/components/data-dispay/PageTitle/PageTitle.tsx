import { Box, Typography } from '@mui/material';
import {
    PageTitleWrapper,
    SubTitleStyled,
    TitleStyled,
} from './PageTitle.styled';

interface PageTitleProps {
    title: string;
    subtitle?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <PageTitleWrapper>
            <TitleStyled>{title}</TitleStyled>
            {subtitle && <SubTitleStyled>{subtitle}</SubTitleStyled>}
        </PageTitleWrapper>
    );
};
