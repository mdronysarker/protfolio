"use client";
import Menudata from "@/data/Menudata";
import Logo from "@/svg/Logo";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Menubar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Menudata?.map((item) => (
              <Link
                className={dmSans.className + " " + "mx-2"}
                key={item.title}
                href="#"
              >
                {item.title}
              </Link>
            ))}
          </Nav>
          <Button className={dmSans.className + " " + "button"}>
            Contact Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
