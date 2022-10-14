import styled from "styled-components";

export const ListCard = styled.li`
  list-style: none;
  border: 2px solid black;
  display: flex;
  margin: 1em;
  flex-direction: column;
  justify-content: space-between;
  /* width: 10em; */
  h3,
  .card-price {
    text-align: center;
  }
  .card-ingredients{
    padding: 5px;
  }
`;
