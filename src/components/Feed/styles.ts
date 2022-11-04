import styled from 'styled-components';

export const MenuContainer= styled.div`
  display: flex;
justify-content: space-between;
 border-bottom: 2px solid var(--secondary);
`;

export const Container = styled.div`
 display: flex;
 flex-direction: column;

 
`;



export const Tab= styled.div`
margin-top: 1rem;
padding:0.7rem 0  1rem ;
padding-left: 1.5rem;
padding-right: 1.5rem;


font-weight: bold;
font-size: 1rem;

outline:0;
cursor: pointer;

color: var(--gray);

&:hover{
    background: var(--twitter-dark-hover);
}

`;

export const Tweets= styled.div`
display: flex;
flex-direction: column;
flex-shrink: 0;
`;