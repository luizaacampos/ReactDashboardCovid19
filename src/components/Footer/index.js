import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion";
import './styles.css'

export default function Footer() {
    return (
        <motion.footer
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <p>Desenvolvido por Luiza Campos</p>
          <div>
          <a href="https://github.com/luizaacampos" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/luiza-de-almeida-campos/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </motion.footer>
    )
}
