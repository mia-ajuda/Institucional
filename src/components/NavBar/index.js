import React from 'react'
import { NavLink } from "react-router-dom";


import {
    Container,
  } from "./styles";

import logo from "../../assets/images/logo.svg"

export default function NavBar() {
    return(
        <Container>
            <div>
                <div id="imageContent">
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div id="routeContent">
                    <NavLink id="navTitle" to="/team">Equipe</NavLink>
                    <NavLink id="navTitle" to="/contact">Contato</NavLink>
                    <NavLink id="navTitle" to="/support">Apoio</NavLink>
                </div>
            </div>
        </Container>
    );
}