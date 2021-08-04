import styled from 'styled-components'


// Modal
export const ContentModal = styled.div`
    background-color: transparent;
    width: 90%;
    padding: 10px 20px;
    margin: 10% auto;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    text-align: center;
`
export const Modal = styled.div`
    background-color: rgba(0,0,0,.9);
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom: 0;
    opacity:1;
    transition: all 1s;
    z-index: 100;
`