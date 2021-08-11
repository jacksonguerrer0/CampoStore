import styled from 'styled-components'
import variables from '../../styles/variables'

export const LoaderPro = styled.div`
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid ${variables.greenDown}; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: 5rem auto 6rem auto;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`