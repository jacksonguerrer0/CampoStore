import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerPay = styled.div`
    display: flex;
    flex-flow: column wrap;
`
export const ContentHeaderProduct = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6rem repeat(3, 4rem);
    background: ${variables.gradiant};
    h2{
        grid-column: 1/3;
        text-align: center;
    }
    img{
        width: 200px;
        grid-row: 2/5;
        grid-column: 1/2;
        
    }
`