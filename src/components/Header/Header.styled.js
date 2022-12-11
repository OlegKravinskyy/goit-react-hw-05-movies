import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.header`
  height: 60px;
  border: 2px solid black;
`;

export const Nav = styled.nav`
  margin-left: 30px;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  &:not(:first-of-type) {
    margin-left: 10px;
  }
`;

export const NavLinkNorm = styled(NavLink)`
  color: blue;
  text-decoration: none;
  display: block;
  padding: 10px 5px;
  border-radius: 8px;
  &.active {
    background-color: green;
    color: white;
  }
`;

// ${({ theme }) => theme.color.border}
//  ${({ theme }) => theme.color.default}
// ${({ theme }) => theme.color.active}
// ${({ theme }) => theme.color.primary}
