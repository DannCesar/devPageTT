import styled,{css} from "styled-components";

import { LocationOn, PermContactCalendar} from '../../styles/icons'
import Button from '../Button'

    export const  Container  = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    scrollbar-width: none;/**Firefox */
    ::-webkit-scrollbar{
        display: none;
    }
    `;
    export const  Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);
    background: var(--twitter);
    position: relative;
    ` ;
    export const  Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));
    border:3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;
    position: absolute;
    bottom: max(-60px, -10vw);
    left: 1rem;
    
    ` ;
    export const ProfileData = styled.div`
    padding: min(calc(10vw + 0.5rem), 4rem) 1rem 0;
    display: flex;
    flex-direction: column;
    position: relative;

    >h1{
        font-weight: bold;
        font-size: 1.5rem;
    }

    >h2{
        font-weight: normal;
        font-size: 1rem;
        color: var(--gray);
    }
    >p{
        font-size: 1rem;
        margin-top: 0.75rem;
    }
    >ul{
        list-style: none;
        margin-top: 0.60rem;
        margin-bottom: 0.60rem;
        >li{
            font-size: 1rem;
            color: var(--gray);
            display: flex;
            align-items: center;
        
        
            >svg{
            fill: var(--gray);
            margin-right: 0.5rem;
             }
        }
    }
        ` ;
    export const   Followage= styled.div`
    display: flex;

    >span{
        font-size: 1rem;
        color: var(--gray);
        

        & + span{
            margin-left: 1.5rem;
        }
    }
    `;

    const iconCSS= css`
    width: 20px;
    height: 20px;
    color: var(--gray);
    `;
    export const LocationIcon = styled(LocationOn)`${iconCSS}`;
    export const    CalendarIcon = styled(PermContactCalendar)`${iconCSS}` ;

    export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 1rem;
    padding: 0.50rem 1rem;
    font-size: 0.92rem;
    border:1px solid var(--gray);

    @media (min-widht: 320px){
        top: 0.75rem;
        padding: 0.75rem 1.15rem;
        font-size: 1rem;
    }
    `;