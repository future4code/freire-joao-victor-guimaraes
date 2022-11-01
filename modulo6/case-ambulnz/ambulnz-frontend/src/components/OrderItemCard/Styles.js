import styled from "styled-components";

export const ListCart = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgray;
  padding: 15px 4px;
  color: #f5f3ef;
`;
export const QtdArea = styled.div`
  display: inline-flex;
  align-items: center;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  height: 30px;
  width: 120px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.55);

  .button {
        border: 0;
        background-color: transparent;
        font-size: 19px;
        outline: 0;
        cursor: pointer;
        height: 30px;
        color: #333;
        :active {
            top: 2px;
            background-color: #ffaa2c;
            border-radius: 10px;
            transition: all ease 0.2s;
    }
  }
`;
