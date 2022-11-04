import styled from 'styled-components';


interface Props{
    outlined?: boolean;
}

export default styled.button<Props>`
background:${(props) => (props.outlined? 'transparent' : 'var(--twitter)')};
color: ${(props)=> (props.outlined? 'var(--white)' : 'var(--white)')};
border: ${(props => (props.outlined? '1px sold var(--white)' : 'none'))};

padding: 1rem;
border-radius: 1.5rem;

font-weight: bold;
font-size: 1rem;
cursor: pointer;
outline: 0;

&:hover{
    background: ${(props) => (props.outlined? 'var(--twitter-dark-hover)': 'var(--twiter-light-hover)')}
}

`;