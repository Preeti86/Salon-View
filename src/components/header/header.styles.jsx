import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 72%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-left: 13em;
  color: #e7d29a;

 }
  @media screen and (max-width: 800px) {
  .HeaderContainer {
    width: 70%;
    display: block;
    margin-bottom: 25px;
    margin-left: 5em;
    justify-content: space-between;
  }
}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  color: #e7d29a;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #e7d29a;
`;

export const Text = styled(Link)`
  font-size: 25px;
  color: black;
  text-align: center;
  padding: 20px;
  padding-left: 10px;
`;