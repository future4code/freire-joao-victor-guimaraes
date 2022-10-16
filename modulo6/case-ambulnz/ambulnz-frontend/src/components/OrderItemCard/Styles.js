import styled from "styled-components"

export const ListCart = styled.section`
display: flex;
align-items: center;
border-bottom: 2px solid lightgray;
padding: 4px;

`
export const QtdArea =styled.div`
    display: inline-flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    height: 30px;
    width: 120px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.55);

    .button{  
        
        border:0;
    background-color:transparent;
    font-size:17px;
    outline:0;
    cursor:pointer;
    padding:0px 10px;
    color:#333;
    :active{
        background-color: #FFAA2C;
        border-radius: 10px;
        transition: all ease .2s;
    }
    }

    

`