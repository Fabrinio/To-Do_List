import styled from "styled-components";

export const Container = styled.div`
    background-color: #29292e;
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;

    button {
        background: transparent;
        border: 0;
        color: #9FFFCB;
        line-height: 0;
        border-radius: 2px;     
    }
    
    .Check{
        background: transparent;
        border: 0;
        color: #9FFFCB;
        line-height: 0;
        border-radius: 2px; 
    }


    .tarefa-concluida {
      text-decoration: line-through;
      margin: 0 1rem;
   }

   .btn-concluido-checked {
      margin: 0 1rem;
      padding: 0.2rem;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      border: .5px solid #16276c;
      background-color: #4060e0;
      color: aliceblue;
      cursor: pointer;
     
   }

   .btn-concluido:hover,
   .btn-deletar:hover {
      border: 1px solid #16276c;
      background-color: #4060e0;
      color: aliceblue;
      transition-duration: 0.5s;
      cursor: pointer;
   }


    :hover .Check{
        color: blue;
    }

    :hover button {
        color: red;
    }

`;