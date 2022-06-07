import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h2
        style={{
          border: "1px solid lightblue",
        borderTop: "1px solid lightblue",
          color: "Red",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          position: "",
        }}
      >
        Game Store Info
      </h2>
      <Container>
        <Row
          style={{
            color: "Red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.linkedin.com/in/ryan-paez/">
              Ryan Paez
            </FooterLink>
            <FooterLink href="#">Jason Garcia</FooterLink>
            <FooterLink href="#">Abraham Gonzalez</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
