import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";
import { Container } from "@mui/material";

export default function Layout(): JSX.Element {
  return (
    <>
      <Nav  />
      <Container>

      <div style={{ marginTop: "200px" }}>
        <Outlet />
      </div>
      </Container>
    </>
  );
}
