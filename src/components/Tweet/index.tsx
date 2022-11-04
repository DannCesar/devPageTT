import React from 'react';

import { Container ,
         Retweeted,
         RepeatIcon,
         Body,
         Avatar,
         Content,
         Header,
         Dot,
        Description,
        ImageContent,
         Icons,
         Status,
         CommentIcon,
         RetweetIcon,
        LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
        <Container>
            <Retweeted>
                <RepeatIcon/>
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar/>
                <Content>
                    <Header>
                        <strong>Pineapps</strong>
                        <span>@Pineapps</span>
                        <Dot/>
                        <time>27 de Out</time>
                    </Header>

                    <Description>Faça sua consultoria</Description>
                    <ImageContent/>
                    <Icons>
                        <Status>
                            <CommentIcon/>
                            10
                        </Status>
                        <Status>
                            <RetweetIcon/>
                            15
                        </Status>
                        <Status>
                            <LikeIcon/>
                            20
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet;