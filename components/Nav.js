import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";
export const NavBar = () => {
  return (
    <Nav activeKey="/home"  className="bg-light py-3 "   variant="dark"> 
      <Nav.Item>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/results" passHref>
          <Nav.Link eventKey="link-1">Results</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/about-us" passHref>
          <Nav.Link eventKey="link-2">About Us</Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  );
};
