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
                    <h2>Equipe</h2>
                    <h2>Contato</h2>
                    <h2>Apoio</h2>
                </div>
            </div>
        </Container>
    );
}