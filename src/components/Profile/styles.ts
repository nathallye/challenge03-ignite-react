
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  
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

export const ProfileCard = styled.div`
  display: flex;

  gap: 2rem;
  width: 100%;
  padding: 2rem;
  
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;

  img {
    border-radius: 8px;

    width: 9.25rem;
  }
`;

export const ProfileCardInfos = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      color: ${props => props.theme["base-title"]};
    }

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
    display: flex;
    flex-direction: column;

    background: ${props => props.theme["base-profile"]};

    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
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
