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
    margin-bottom: 6rem;
  th{
    padding: 1rem 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    font-weight: 900;
    border-right: 2px solid whitesmoke;
    text-align: center;
  }
  td{
      padding: 1rem 0;
      font-size: 0.8rem;
      text-align: center;
  }
  tr{
    border-bottom: 1px solid whitesmoke;
  }
  .status {
    border-radius:  0.2rem;
    background-color: red;
    padding: 0.2rem 1rem;
    text-align: center;
  }
  .status-pending {
    background-color: #fff0c2;
    color: #a68b00;
  }
  
  .status-paid {
  background-color: #c8e6c9;
  color:  #388e3c;
  }
  
  .status-unpaid {
    background-color: #ffcdd2;
    color: #c62828;
  }
    
  
  .amount {
    text-align: right;
  }
    
`
export const Thead = styled.thead`
      box-shadow: 0 5px 10px #e1e5ee;
`
