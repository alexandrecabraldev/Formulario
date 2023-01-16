import React from 'react'
import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: ${props=>props.theme.darkBlue};
    max-width: 90rem;
    max-height: 29rem;
    margin: auto;
    color: ${props=>props.theme.white};
    font-weight: 400;
    text-align: center;
    padding-top: 6.5rem;
    font-style: normal;

    h1{
        font-size: 2.25rem;   
        line-height: 2.8rem;

        font-family: 'Staatliches', cursive;
        
    }

    span{
        font-size: 1rem;
        line-height: 1.5rem;
        display: block;

        font-family: 'Poppins', sans-serif;
    }

    div{
        display: block;
        background-color: ${props=>props.theme.orange};
        padding: 3.1rem 0rem;
        margin-top: 2rem;
        margin: auto;

        font-family: 'Staatliches', cursive;
        font-size: 1.5rem;
        line-height: 2.1rem;

        border-radius: 20px 20px 0 0;

        max-width: 46.875rem;
        
    }
`;

export function Header(){
    return(
        <HeaderContainer>
            <h1>avalie a sua mentoria</h1>
            <span>Chegou a hora de avaliar o seu mentor. Bora lá?</span>
            <div>Informações pessoais</div>
        </HeaderContainer>
    );
}