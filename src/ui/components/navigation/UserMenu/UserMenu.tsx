import { ExpandMore } from '@mui/icons-material';
import { useRef, useState } from 'react';
import Link from '../Link/Link';
import { MenuItemStyled, MenuStyled, UserMenuButton } from './UserMenu.styled';

interface UserMenuProps {
    displayName: string;
    onLogout?: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
    displayName,
    onLogout,
}) => {
    const ButtonRef = useRef<HTMLButtonElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <UserMenuButton
                variant="contained"
                endIcon={<ExpandMore />}
                ref={ButtonRef}
                onClick={() => setIsMenuOpen(true)}
            >
                {displayName}
            </UserMenuButton>
            <MenuStyled
                anchorEl={ButtonRef.current}
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                onClick={() => setIsMenuOpen(false)}
            >
                <Link href="/alterar-dados">
                    <MenuItemStyled>Alterar dados</MenuItemStyled>
                </Link>
                <MenuItemStyled onClick={onLogout}>Sair</MenuItemStyled>
            </MenuStyled>
        </>
    );
};
