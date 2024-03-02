import styled from "styled-components";
const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 2px solid transparent;
  transition: 0.6s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: 0.5s background ease-in;
  }
`;
export default Button;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 2px solid black;
  color: black;
  &:hover {
    background-color: black;
    color: white;
    border: 2px solid transparent;
  }
`;
