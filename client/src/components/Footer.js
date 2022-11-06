import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter,} from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  import { Link } from "react-router-dom";

  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1.5;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 0.5;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
  `;
  
  const ListItem = styled.li`
  width: 50%;
    margin-bottom: 10px;
    color:#000;
  `;
 
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>DISNEY STORE</Logo>
          <Desc>
          A children's clothing store, 
          we are keen to provide the best materials at the lowest possible price,
          Making your child the most elegant is our goal.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <Link to="/"><ListItem>Home</ListItem></Link>
            <Link to="/Cart"><ListItem>Cart</ListItem></Link>
            <Link to="/products/jeans"><ListItem>Jeans</ListItem></Link>
            <Link to="/products/coat"><ListItem> Jackets</ListItem></Link>
            <Link to="/products/shose"><ListItem>Shoses</ListItem></Link>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 100 Street, Damietta, New Damietta.
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +2 240 528
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@desny store
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;