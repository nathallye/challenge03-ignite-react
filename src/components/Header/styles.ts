import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["header"]};

  padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

