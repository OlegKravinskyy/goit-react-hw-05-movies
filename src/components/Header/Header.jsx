import { HeaderBox, Nav, NavLinkNorm, NavList, NavItem } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderBox>
        <Nav>
          <NavList>
            <NavItem>
              <NavLinkNorm to={'/'} end>
                Home
              </NavLinkNorm>
            </NavItem>
            <NavItem>
              <NavLinkNorm to={'/movies'} end>
                Movie
              </NavLinkNorm>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderBox>
    </>
  );
};
