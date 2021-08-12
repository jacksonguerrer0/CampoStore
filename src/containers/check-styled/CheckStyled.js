import styled from  'styled-components'
import variables from '../../styles/variables'

export const ContainerCheck = styled.div`
    padding: 1rem;
`
export const ContentCheck = styled.div`
    display: grid;
    background-color: ${variables.white};
    border-radius: 1rem;
    padding: 1rem;
    margin-top: 2vh;
    box-shadow: ${variables.boxShadown};
    text-align: center;
    img{
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin: 0 auto;
    }
    h3{
        color: ${variables.greenHight};
    }
    span{
        margin-top: 1rem;
        color: ${variables.suave};
    }
`