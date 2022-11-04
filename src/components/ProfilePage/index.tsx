import React from 'react';
import Feed from '../Feed' ;

import { Container ,
        Banner, 
        Avatar, 
        ProfileData, 
        LocationIcon,
        CalendarIcon, 
        Followage,
        EditButton,} from './styles';

const ProfilePage: React.FC = () => {
  return (
  <Container>
    <Banner>
        <Avatar/>
    </Banner>

    <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Daniel Cesar</h1>
        <h2>@dann_cesar</h2>
        <p>
            Developer at Pineapps Digital Solutions
        </p>

        <ul>
            <li>
               <LocationIcon/> 
               São Paulo, Brasil
            </li>
            <li>
                <CalendarIcon/>
                Ingressou em março de 2021
            </li>
        </ul>
        <Followage>
            <span>
                seguindo <strong>16</strong>
            </span>
            <span>
                <strong>10 </strong>seguidores 
            </span>
        </Followage>
    </ProfileData>
    <Feed/>
  </Container>
    )
}

export default ProfilePage;