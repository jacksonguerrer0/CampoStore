import styled from  'styled-components'
import variables from '../../styles/variables'

export const ContainerCheck = styled.div`
    padding: 0 1rem;
`
export const ContentCheck = styled.div`
    display: grid;
    background-color: ${variables.white};
    border-radius: 1rem;
    padding: 0 1rem 1rem 1rem;
    margin-top: 2vh;
    box-shadow: ${variables.boxShadown};
    text-align: center;
    position: relative;
    img{
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin: 0 auto;
    }
    .i-declined{
        font-size: 180px;
        color: #a68b00;
        margin: 2rem auto;
    }
    .i-error{
        font-size: 180px;
        color: #c62828;
        margin: 2rem auto;

    }
    .status {
        border-radius: 1rem 1rem 0 0;
        text-align: center;
        height: 5rem;
        margin: 0 -1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .status-declined {
        background-color: #fff0c2;
        color: #a68b00;
    }
    
    .status-approved {
        background-color: #c8e6c9;
        color:  #388e3c;
    }
    
    .status-error {
        background-color: #ffcdd2;
        color: #c62828;
    }
    span{
        margin-top: 1rem;
        color: ${variables.suave};
    }
`