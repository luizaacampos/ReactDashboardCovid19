import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import './styles.css'

export default function Footer() {
    return (
        <footer>
          <p>Desenvolvido por Luiza Campos</p>
          <div>
          <a href="https://github.com/luizaacampos" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/luiza-de-almeida-campos/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </footer>
    )
}
