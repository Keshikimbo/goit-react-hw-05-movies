import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
`
export const Info = styled.div`
    margin-left: 12px;
`
export const AddInfo = styled.h3`
    margin-top: 32px;
`

export const List = styled.ul`
    display: flex;
`

export const Item = styled.li`
    margin-right: 12px
`

export const Title = styled.h2`
    margin-bottom: 12px;
    font-size: 32px;
`
export const Paragraph = styled.p`
    margin-bottom: 12px;
`
export const Rating = styled.span`
    background-color: #ff4500;
    color: white;
    padding: 0 8px;
    border-radius: 4px;
    line-height: 12px
`

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: orangered;
  }

  &.active {
    color: orangered;
  }
`;