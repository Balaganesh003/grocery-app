import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  height: 50px;
  width: auto;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #32cd32;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid #32cd32;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  font-size: 14px;
  margin-left: 2rem;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid #32cd32;

  &:hover {
    background-color: #32cd32;
    color: white;
    border: none;
  }
`;
