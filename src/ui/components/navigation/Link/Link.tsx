import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import Router from 'next/router';
import {
    Link as MuiLink,
    LinkProps as MuiLinkProps,
    ButtonProps,
} from '@mui/material';

export interface LinkProps {
    href: string;
    mui?: MuiLinkProps | ButtonProps;
    next?: NextLinkProps;
    Component?: React.ElementType;
    onClick?: () => void;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
    href,
    mui,
    next,
    children,
    Component = MuiLink,
    ...props
}) => {
    const isNextEnv = Boolean(Router.router);

    return isNextEnv ? (
        <NextLink href={href} passHref {...next}>
            <Component {...mui} {...props}>
                {children}
            </Component>
        </NextLink>
    ) : (
        <Component href={href} {...mui} {...props}>
            {children}
        </Component>
    );
};

export default Link;
