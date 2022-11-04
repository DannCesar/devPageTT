import styled, {css} from 'styled-components';
import {Chat, Favorite, Repeat} from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.95rem 1rem;

  border-top: 1px solid var(--gray);
  max-width: 100%;
`;
 
export const Retweeted= styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--gray);
`;
export const RepeatIcon= styled(Repeat)`
width: 1rem;
height: 1rem;
margin-left: 2.5rem;
margin-right: 0.5rem;
fill: var(--gray);
  
`;
export const Body= styled.div`
  display: flex;
  margin-top: 0.5rem;
  position: relative;
`;
export const Avatar= styled.div`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
`;
export const Content= styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 2px;
  padding-left: 4rem;

`;
export const Header= styled.div`
  display: flex;
  align-items: center;

  font-size: 1rem ;
  white-space: nowrap;

  >strong{
    margin-right: 0.5rem;
  }

  >span, time{
    color: var(--gray)
  }

  >strong, span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const Dot= styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 0.6rem;
`;
export const Description= styled.div`
  font: 1rem;
  margin: 0.25rem;
`;
export const ImageContent= styled.div`
  margin-top: 0.75rem;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: var(--outline);
  border-radius: 0.80rem;
`;
export const  Icons= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;/**Mobile */

  @media (min-width: 330px){
    width: 63%;
  }

  >div{
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`;
export const Status= styled.div`
  
  display: flex;
  align-items: center;

  font-size: 1rem;
 

  > svg{
    margin-right: 0.2rem;
    margin-left: 0.3rem;
  }

    &:nth-child(1){
      >svg {
        fill: var(--gray);
      }
    }
    &:nth-child(2){
      color: var(--retweet);
      >svg {
        fill: var(--retweet);
      }
    }
    &:nth-child(3){
      color: var(--like);
      >svg {
        fill: var(--like);
      }
    }
`;
const iconCSS= css`
width: 1.2rem;
height: 1.2rem;
`

export const CommentIcon= styled(Chat)`
  ${iconCSS}
`;
export const RetweetIcon= styled(Repeat)`
  ${iconCSS}
`;
export const  LikeIcon= styled(Favorite)`
  ${iconCSS}
`;