import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Dropdown,
  Form,
  Button,
  BSpan
} from 'bootstrap-4-react';

export default class Navigator extends Component {
  render() {
    return (
      <Navbar expand="md" dark bg="dark" fixed="top">
        <Navbar.Brand href="#">Graded Journal</Navbar.Brand>
        <Navbar.Toggler target="#navbarsExampleDefault" />

        <Navbar.Collapse id="navbarsExampleDefault">
          <Navbar.Nav mr="auto">
            <Nav.ItemLink href="#" active>
              Home
              <BSpan srOnly>(current)</BSpan>
            </Nav.ItemLink>
            <Nav.ItemLink href="#">Login</Nav.ItemLink>
          </Navbar.Nav>
          <Form inline my="2 lg-0">
            <Form.Input mr="sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline success my="2 sm-0" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
