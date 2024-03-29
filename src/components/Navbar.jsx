import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined, FavoriteBorderOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import {useSelector} from "react-redux"; 

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Container = styled.div`
  height: 35px;
  ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
  padding: 10px, 20px;
  display: flex;
  align-items: center;
  justifycontent: space-between;
  
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
`;

const Input = styled.input`
  display: flex;
  border: none;
  
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })};
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex;
  ${mobile({ flex: 2, justifyContent: 'center' })}
  
`;

const MenuItem = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  margin-left: 65px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to ="/"> <Logo>JELABTY</Logo></Link>
        </Center>
        <Right>
          <Link to="/Register"><MenuItem>REGISTER</MenuItem></Link>
          <Link to="/Login"><MenuItem>SIGN IN</MenuItem></Link>
    <Link to="/favorite"> 
         <MenuItem>
         <Badge badgeContent={quantity} color="primary">
              <FavoriteBorderOutlined />
            </Badge> 
          </MenuItem> 
          </Link>
  <Link to="/cart"> 
         <MenuItem>
         <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge> 
          </MenuItem> 
          </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
