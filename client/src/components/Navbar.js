import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { tab } from "../responsive";
 import { Badge } from "@material-ui/core";
 import {  ShoppingCartOutlined } from "@material-ui/icons";
 import { Link } from "react-router-dom";
 import { useSelector } from "react-redux";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "16px" })}
  ${tab({ fontSize: "16px" })}
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div>
      <Container>
      <Wrapper>
        <Left>
            <Link  to="/"><Logo>DISNEY STORE</Logo></Link>
        </Left>
        <Right>
        <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
        <Link to="/login"><MenuItem>SIGN IN</MenuItem></Link>
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
     
    </div>
  )
}

export default Navbar
