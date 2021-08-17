import styled from 'styled-components'
import variables from '../../styles/variables'

export const Table = styled.table`
    border-collapse: collapse;
    box-shadow: 0 5px 10px #e1e5ee;
    background-color: white;
    text-align: left;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
  th{
    padding: 1rem 0.5rem;
    /* width: 5rem; */
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    font-weight: 900;
    border-right: 2px solid whitesmoke;
    text-align: center;
  }
  button{
    width: 90%;
    color: ${variables.white};
    font-size: 0.9rem;
    font-family: 'Otomanopee One';
    text-decoration: none;
    cursor: pointer;
    padding: 0.5em;
    margin: auto 0.3rem;
    text-align: center;
    border-radius: 10px;
    border: none;
    background: ${variables.gradiant};
    box-shadow: ${variables.boxShadown};
    &:hover {
        filter:brightness(0.97);
    }
  }
  td{
      padding: 1rem 0;
      font-size: 0.8rem;
      text-align: center;
      div{
        margin: auto 0.3rem;
        a{
          padding: 0.5rem 0;

        }
      }
  }
  tr{
    border-bottom: 1px solid whitesmoke;
    padding: 10rem !important;
  }
  .status {
    border-radius:  0.2rem;
    background-color: red;
    padding: 0.2rem 0;
    text-align: center;
  }
  .status-pending {
    background-color: #fff0c2;
    color: #a68b00;
    font-size: 0.7rem;
  }
  
  .status-paid {
  background-color: #c8e6c9;
  color:  #388e3c;
  font-size: 0.7rem;
  }
  
  .status-unpaid {
    background-color: #ffcdd2;
    color: #c62828;
    font-size: 0.7rem;
  }
    
  
  .amount {
    text-align: right;
  }
    
`
export const Thead = styled.thead`
      box-shadow: 0 5px 10px #e1e5ee;
`
