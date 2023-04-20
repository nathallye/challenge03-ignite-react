
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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PostInfoTitle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 2rem;
  
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 1.5rem;
        color: ${props => props.theme["base-title"]};
      }
    }

    a {
      display: flex;
      align-items: center;
      
      padding-right: 0.5rem;
      
      text-decoration: none;

      span {
        color: ${props => props.theme["blue-100"]};
        font-size: 0.75rem;
      }
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${props => props.theme["base-subtitle"]};
      font-size: 1rem;
    }
  }
`;

export const PostInfoContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;
