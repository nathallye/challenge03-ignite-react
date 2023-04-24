import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  width: 24.5rem;
  padding: 2.3rem 2rem 2.3rem 2rem;

  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
  

  @media (max-width: 600px) {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    gap: 1rem;

    h1 {
      color: ${props => props.theme["base-title"]};
      font-size: 1.25rem;
    }

    span {
      width: 35%;

      color: ${props => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  p {
    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
    text-align: left;

    /*Limitar texto exibido na home*/
    max-width: 80ch;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: pre-wrap; */
    white-space: nowrap;
  }
`;