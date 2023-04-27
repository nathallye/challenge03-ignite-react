
import styled from "styled-components";

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 2rem;

  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;
`;

export const PostInfoTitle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;
  padding: 2rem;
  
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      
      gap: 0.5rem;
      padding-right: 0.5rem;
      
      text-decoration: none;

      span {
        color: ${props => props.theme["blue-100"]};
        font-size: 0.75rem;
      }
    }
  }

  div {
    background: ${props => props.theme["base-profile"]};

    color: ${props => props.theme["base-text"]};
    font-size: 1rem;

    @media (max-width: 600px) {
      display: flex;

      align-self: center;
    }

    h1 {
      font-size: 1.5rem;
      color: ${props => props.theme["base-title"]};
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 600px) {
      flex-direction: column;
    }


    span {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      color: ${props => props.theme["base-span"]};
      font-size: 1rem;
    }
  }
`;

export const PostInfoContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 2.5rem 2rem 2.5rem 2rem;

  code {
    white-space: pre-wrap;
  }
`;
