import React from 'react';
import Button from '../Button'

import { Container,
        Topside,
        Logo,
        MenuButton,
         HomeIcon,
        BellIcon,
        EmailIcon,
        SaveIcon,
        ListIcon,
        ProfileIcon,
        EllipsIcon,
         Botside,
        Avatar,
    ProfileData,
ExitIcon} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <Logo/>
            <MenuButton>
                <HomeIcon/>
                <span>Página Inicial</span>
            </MenuButton>
            <MenuButton>
                <BellIcon/>
                <span>Notificações</span>
            </MenuButton>
            <MenuButton>
                <EmailIcon/>
                <span>Mensagens</span>
            </MenuButton>
            <MenuButton>
                <SaveIcon/>
                <span>Itens salvos</span>
            </MenuButton>
            <MenuButton>
                <ListIcon/>
                <span>Listas</span>
            </MenuButton>
             <MenuButton className='active'>
                <ProfileIcon/>
                <span>Perfil</span>
            </MenuButton>
            <MenuButton>
                <EllipsIcon/>
                <span>Mais</span>
            </MenuButton>
            <Button>
                <span>Tweetar</span>
            </Button>
        </Topside>
        <Botside>
        <Avatar/>
        <ProfileData>
            <strong>Daniel Cesar</strong>
            <span>@dann_cesar</span>
        </ProfileData>
        <ExitIcon/> 
        </Botside>
    </Container>
    )
}

export default MenuBar;
