import styled from "styled-components";
import logo from "../assets/images/logo_sm.png";

const HeaderRow = styled.header`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavigationMenu = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex-grow: 1;
`;

function Header() {
  return (
    <HeaderRow>
      <Logo src={logo} />
      <NavigationMenu>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
      </NavigationMenu>
      <div>user</div>
    </HeaderRow>
  );
}

export default Header;
