import styled from "styled-components"

const FormContainer = styled.form`

    background-color: ${props=>props.theme.white};

    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem 4rem 4rem;
    max-width: 38.875rem;
    margin: auto;
    border-radius: 0 0 20px 20px;

    div{
        display: flex;
        
    }

    label{
        text-align: start;
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        padding-bottom: 0.5rem;
        line-height: 1.5rem;
    }
    

    input[type="text"],  input[type="email"]{
        height: 3.4rem;
        border-radius: 8px;
        border: 1px solid ${props=>props.theme.borderInput};
        background-color: ${props=>props.theme.backgroundInput};
        padding: 0 0.5rem;
        font-size: 1rem
    }

    input[title="mentor"]{
        margin-bottom: 1.9rem;
        width: 50%;
    }

    span{
        border-bottom: 1px solid ${props=>props.theme.borderInput};
        padding-bottom: 0.5rem;
        padding-top: 1.9rem;
        margin-bottom: 1.9rem;
        font-family: 'Staatliches', cursive;
        font-size: 1.5rem;
        color: ${props=>props.theme.colorTextSpan}
    }

    textarea{
        margin-bottom: 1.9rem;
    }
        
   
`;

const DivContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 1.375rem;
    margin-bottom: 1rem;
`;

const FeedBackContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label[id="labelCheckBox"]{
        padding: 0;
    }

    input[id="checkbox"]{
        border-radius: 8px;
        border: 1px solid ${props=>props.theme.borderInput};
        background-color: ${props=>props.theme.backgroundInput};
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        //ajeitar o checkbox
    }
`;

const NameContainer =styled.div`
    display: flex;
    flex:2;
    flex-direction: column;
`;




export function Form(){
    return(
        <FormContainer>
            
            <DivContainer>
                <NameContainer>
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" title="Nome" id="Nome"/>
                </NameContainer>
                
                <NameContainer>
                    <label htmlFor="Sobrenome">Sobrenome</label>
                    <input type="text" title="Sobrenome"/>
                </NameContainer>
            </DivContainer>

            <label htmlFor="Email">Email</label>
            <input type="email" title="email"/>

            <span>Informações do mentor</span>

            <label htmlFor="mentor">Selecione quem foi o seu mentor</label>
            <input type="text" title="mentor" id="mentor"/>

            <label htmlFor="">Feedback sobre o mentor</label>
            <textarea name="" id="" title="textArea"></textarea>

            <FeedBackContainer>
                <input type="checkbox" name="" id="checkbox" title="checkbox"/>
                <label htmlFor="checkbox" id="labelCheckBox">Todas as minhas dúvidas foram esclarecidas durante a mentoria.</label>
            </FeedBackContainer>

        </FormContainer>
    );
}