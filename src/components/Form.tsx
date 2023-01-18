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


    label{
        text-align: start;
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        padding-bottom: 0.5rem;
        line-height: 1.5rem;
    }
    

    input[type="text"],  input[type="email"], input[type="date"]{
        height: 3.4rem;
        border-radius: 8px;
        border: 1px solid ${props=>props.theme.borderInput};
        background-color: ${props=>props.theme.backgroundInput};
        padding: 0 0.5rem;
        font-size: 1rem;

    }


    input[title="mentor"]{
        margin-bottom: 1.9rem;
        width: 50%;

        @media(max-width:499px) {
            width: 100%;
        }
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
     
    button{
        padding: 0.78rem 0;
        color: ${props=>props.theme.white};
        background-color: ${props=>props.theme.orange};
        border: none;
        border-radius: 8px;
        font-family: 'Staatliches', cursive;
        font-size: 1.25rem;
        line-height: 1.625rem;
        cursor: pointer;

        width: 100%;
    }
   
`;

const DivContainer = styled.div`
    display: flex;
    gap: 1.375rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`;

const NameContainer =styled.div`
    display: flex;
    flex:2;
    flex-direction: column;

    width: 100%;
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

const ContainerDate = styled.div`
    margin-bottom: 4rem;
    display: grid;
    //grid-template-columns: 47.5% 47.5%;
    grid-template-columns: repeat(auto-fit, minmax(10.5rem, 1fr));
    grid-column-gap: 5%;
    //gap:2rem;
    //flex-wrap: wrap;
`;

const ContaunerHourInputLabel = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerHour = styled.div`
    display: grid;
    grid-template-columns: 48.2% 48.2%;
    gap: 3.6%;
    //gap: 0.625rem;
    
`;

const ContainerDateTime = styled.div`
    
    display: flex;
    flex-direction: column;

    input[type="datetime"]{
        //max-width: 7.75rem;
        height: 3.4rem;
        border-radius: 8px;
        font-size: 1rem;

        border: 1px solid ${props=>props.theme.borderInput};
        background-color: ${props=>props.theme.backgroundInput};

        padding: 0 0.5rem;
    }

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

            <span>Agendando próxima mentoria</span>

            <ContainerDate>

                <ContaunerHourInputLabel>
                    <label htmlFor="data">Data</label>
                    <input type="date" name="" id="data" title="date"/>
                </ContaunerHourInputLabel>

                <ContainerHour>

                    <ContainerDateTime>
                        <label htmlFor="hour">Das</label>
                        <input type="datetime" name="" id="hour" title="dateTime"/>
                    </ContainerDateTime>

                    <ContainerDateTime>
                        <label htmlFor="hour2">Até</label>
                        <input type="datetime" name="" id="hour2" title="dateTime"/>
                    </ContainerDateTime> 

                </ContainerHour>
            </ContainerDate>

            <div>
                <button type="submit">Salvar</button>
            </div>

        </FormContainer>
    );
}