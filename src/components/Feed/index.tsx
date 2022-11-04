import React from 'react';
import Tweet from '../Tweet';
import {Container, Tab, Tweets,MenuContainer } from './styles'




const Feed: React.FC = () => {
  return (
        <Container>
            <MenuContainer>

            <Tab>Tweets </Tab>
            <Tab>Tweets e respostas</Tab>
            <Tab>Mídia</Tab>
            <Tab>Curtidas</Tab>
            </MenuContainer>
          
                    <Tweets>
                        <Tweet/>
                        <Tweet/>
                        <Tweet/>

                    </Tweets>
                
                
        </Container>

            
        
  
    )
}

export default Feed;