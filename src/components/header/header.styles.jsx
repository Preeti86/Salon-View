import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;


  @media screen and (max-width: 800px) {
  .HeaderContainer {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    justify-content: space-between;
  }
}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  color: #BDB76B;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Text = styled(Link)`
  font-size: 25px;
  color: black;
  text-align: center;
  padding: 20px;
  padding-left: 10px;
`;


