import styled from 'styled-components'

export const ContainerProductsHome = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 90px;
    padding: 0 1rem;
    @media (max-width: 500px) {
      max-width: 500px;
      min-width: 300px;
      padding: 0;
   }
    
`