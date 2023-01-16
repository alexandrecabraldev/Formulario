import styled from "styled-components"

const FormContainer = styled.form`

    background-color: ${props=>props.theme.white};

    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem 4rem 4rem;
    max-width: 38.875rem;
    margin: auto;

    div{
        display: flex;
        
    }

    label{
        text-align: start;
    }
        
   
`;


export function Form(){
    return(
        <FormContainer>
            
            <div>
                <div>
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" title="Nome" id="Nome"/>
                </div>
                
                <div>
                    <label htmlFor="Sobrenome">Sobrenome</label>
                    <input type="text" title="Sobrenome"/>
                </div>
            </div>

            <label htmlFor="Email">Email</label>
            <input type="email" title="email"/>

            <span>Informações do mentor</span>

            <label htmlFor="mentor">Selecione quem foi o seu mentor</label>
            <input type="text" title="mentor" id="mentor"/>

            <label htmlFor="">Feedback sobre o mentor</label>
            <textarea name="" id="" title="textArea"></textarea>

            <div>
                <input type="checkbox" name="" id="" title="checkbox"/>
                <label htmlFor="">Todas as minhas dúvidas foram esclarecidas durante a mentoria.</label>
            </div>

        </FormContainer>
    );
}