import styled, {css} from 'styled-components';
import logo from '../../img/PineappsLogoOk.png'
import{Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    ViewList,
    Save,
    More
   } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;

  top: 0;
  left: 0;

  padding: 0.5rem 1.3rem 1.5rem;
   max-height: 100vh;
   overflow-y: auto;
`;

export const  Topside= styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 1280px){
   align-items: flex-start;
}

`;

export const  Logo= styled.div`
background-image:url(${logo});
width: 50px;
height:80px;
align-items: center;
margin-bottom: 1rem;
`;

export const MenuButton= styled.button`
display: flex;
align-items: center;
flex-shrink: 0;

>span{
   display: none;
}

@media (min-width: 1280px){
   >span {
      display: inline;
      margin-left: 20px;

      font-weight: bold;
      font-size: 1rem;
   }
   padding-right: 1rem;
}
   padding: 8.25px;
   outline: 0;

   & + button{
      margin-top: 1rem;
   }

   & + button:last-child {
      margin-top: 33px;
      width: 40px;
      height:40px;
   
      >span {
         display: none;
      }
      @media (min-width: 1280px){
         width: 100%;
         height: unset;

         >span{
            display: inline;
         }
      }
   }

   cursor: pointer;
   border-radius: 1.5rem;

   &:hover{
      background: var(--twitter-dark-hover);
   }

   &:hover,
   &.active{
      span,
      svg{
         color: var(--twitter);
         fill: var(--twitter);
      }
   }
`;



export const Button= styled.div``;


const IconCSS = css`
flex-shrink: 0;
width: 2rem;
height: 2rem;
color: var(--white);
`;

export const   HomeIcon= styled(Home)`${IconCSS}`;

export const   BellIcon= styled(Notifications)`${IconCSS}`;

export const  EmailIcon= styled(Email)`${IconCSS}`;

export const   SaveIcon= styled(Save)`${IconCSS}`;

export const   ListIcon= styled(ViewList)`${IconCSS}`;

export const EllipsIcon= styled(More)`${IconCSS}`;

export const ProfileIcon= styled(Person)`${IconCSS}`;

export const  Botside=styled.div`
margin-top: 1.25rem;
display: flex;
align-items: center;
`;
  export const Avatar=styled.div`
  width:39px;
  height: 39px;

  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--gray);
  
  `;
  export const  ProfileData=styled.div`
  display: none;

  @media (min-width: 1280px){
   display: flex;
   flex-direction: column;

   margin-left: 0.75rem;
   font-size: 14px;
  }
  `;

export const ExitIcon= styled(ExitToApp)`
display: none;

@media (min-width: 1280px ){
   display: inline-block;
   width: 25px;
   height: 25px;
   color: var(--white);
   margin-left: 2rem;
   cursor: pointer;

   &:hover{
      >path{
         color: var(--gray);
      }
   }
}
`;