import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  ${mobile({ fontSize: "12px",  })}
`;

const Announcement = () => {
  return (
    <div>
  <Container>Super Deal! Free Shipping on Orders Over $50</Container>
  </div>
  )
};

export default Announcement;