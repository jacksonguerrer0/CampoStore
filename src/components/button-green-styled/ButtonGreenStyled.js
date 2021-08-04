import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerButtonGreen = styled.div`
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    a{
        width: 100%;
        color: ${variables.white};
        text-decoration: none;
        cursor: pointer;
        padding: 1rem;
        text-align: center;
        border-radius: 10px;
        background: ${variables.gradiant};
        box-shadow: ${variables.boxShadown};
        &:hover {
            filter:brightness(0.97);
        }
    }
`