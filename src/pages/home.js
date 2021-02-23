import React from 'react'
import { RiVirusFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

export default function Home () {
    return (
        <motion.div
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                show: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
            className="home"
        >
            <h1>COVID-19 <RiVirusFill /></h1>
            <p>Dashboard</p>
            <Link to="/mundo">
                <button className="homeBtn">Acessar</button>
            </Link>
        </motion.div>
    )
}
