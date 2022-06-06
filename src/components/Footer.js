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
      <h1
        style={{
          color: "Red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Game Store info
      </h1>
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
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Ryan Paez</FooterLink>
            <FooterLink href="#">Jason Garcia</FooterLink>
            <FooterLink href="#">Abraham Gonzalez</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
