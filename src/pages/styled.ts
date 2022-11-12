import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  h1 {
    padding: 1rem;
  }
`;

export const StyledTasks = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 1rem;
  }
`;

export const StyledInputForm = styled.form`
  width: 20vw;
  padding: 1rem;
  background-color: var(--secondaryBackgroundColor);
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  border-radius: 0.5rem;

  .input__field {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`;

export const StyledButton = styled.button`
  font-size: var(--mediumFontSize);
  background-color: var(--primaryColor);
  padding: 0.8rem;
  min-width: 10rem;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    margin-bottom: 0.5rem;
    box-shadow: 5px 5px 5px grey;
    color: white;
  }
`;
