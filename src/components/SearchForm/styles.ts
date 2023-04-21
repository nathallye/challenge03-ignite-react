import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem 0 0.2rem;

    span:first-child {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.125rem;
    }

    span:last-child {
      color: ${props => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  input {
    flex: 1;
    
    background: ${props => props.theme["base-input"]};
    border: 0;
    border-radius: 6px;
    color: ${props => props.theme["base-text"]};
    
    padding: 1rem;
    
    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }

    @media (max-width: 600px) {
      padding-right: 0.5rem;
    }
  }
`;
