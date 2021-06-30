import React, {Component} from 'react';
import {Navbar, Nav, BSpan } from 'bootstrap-4-react';
import {HashRouter, Switch, Route} from "react-router-dom";

const HomeItems = props => (
    <React.Fragment>
        <Nav.ItemLink href="#/" active>
            Home
            <BSpan srOnly>(current)</BSpan>
        </Nav.ItemLink>
        <Nav.ItemLink href="#/login" active>
            Login
        </Nav.ItemLink>
    </React.Fragment>
)

const LoginItems = props => (
    <React.Fragment>
        <Nav.ItemLink href="#/" active>
            Home
        </Nav.ItemLink>
        <Nav.ItemLink href="#/login" active>
            Login
            <BSpan srOnly>(current)</BSpan>
        </Nav.ItemLink>
    </React.Fragment>
)

export default class Navigator extends Component {
    render() {
        return (
            <Navbar expand="md" dark bg="dark" fixed="top">
                <Navbar.Brand href="#">Graded Journal</Navbar.Brand>
                <Navbar.Toggler target="#navbarsExampleDefault"/>

                <Navbar.Collapse id="navbarsExampleDefault">
                    <Navbar.Nav mr="auto">
                        <HashRouter>
                            <Switch>
                                <Route exact path="/" component={HomeItems} />
                                <Route exact path="/login" component={LoginItems} />
                            </Switch>
                        </HashRouter>
                    </Navbar.Nav>
                    <Navbar.Nav>
                        <Navbar.Text>
                            Welcome Traveler
                        </Navbar.Text>
                    </Navbar.Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
