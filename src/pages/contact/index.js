import React from 'react'

import {
    Container,
  } from "./styles";

import contactImage from "../../assets/images/contact.svg"


export default function Contact() {
    return(
        <Container>
            <div>
                <div>
                    <div>
                        <img src={contactImage} alt="contact" />
                    </div>
                    <div id="supportContent">
                        <h1>Contato</h1>
                        <p>Aqui se encontra todas as instituições que acredita na capacidade do Mia Ajuda em melhorar a vida das pessoas através da solidariedade.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}