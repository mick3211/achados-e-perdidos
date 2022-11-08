import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {
    ActionContainer,
    ItemInformationContainer,
    ItemInformationDescription,
    ItemInformationImageWrapper,
    ItemInformationTitle,
} from './ItemInformation.styled';

interface ItemInformationProps {
    picture?: string;
    title: string;
    description?: string[];
    action?: React.ReactNode;
}

export const ItemInformation: React.FC<ItemInformationProps> = ({
    title,
    description,
    picture,
    action,
}) => {
    return (
        <ItemInformationContainer>
            <ItemInformationImageWrapper>
                <Image
                    src={picture || '/placeholder_image.jpg'}
                    alt={`Foto de ${title}`}
                    layout="fill"
                    objectFit="contain"
                />
            </ItemInformationImageWrapper>
            <div>
                <ItemInformationTitle>{title}</ItemInformationTitle>
                {description?.map((item, index) => (
                    <ItemInformationDescription key={index}>
                        {item}
                    </ItemInformationDescription>
                ))}
                <ActionContainer>{action}</ActionContainer>
            </div>
        </ItemInformationContainer>
    );
};
