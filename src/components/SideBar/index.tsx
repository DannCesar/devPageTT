import React from 'react';
import List from '../List'
import FollowSugestion from '../FollowSugestion';
import News from '../News';
import StickyBox from 'react-sticky-box'


import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder= "Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>
    <StickyBox>

    <Body>
           <List 
           title="Quem seguir"
           elements={[
            <FollowSugestion
                    name="Lucas Soares"
                    nickname="@luksmusic"
            />,
            <FollowSugestion
                    name="Thiago Soares"
                    nickname="@scarx"
            />,
            <FollowSugestion
                    name="Marcio Silva"
                    nickname="@AKAT13"
            />
                ]}
           />
           <List 
           title="O que está acontecendo"
           elements={[<News/>]}
           />

       
        </Body>
    </StickyBox>
       
    </Container>
    )
}

export default SideBar;