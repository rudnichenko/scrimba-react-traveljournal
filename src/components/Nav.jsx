import React from "react"
import logo from '../assets/logo.png'

export default function Nav() {
    return (
        <nav>
            <img src={logo} />
            <span>My travel journal.</span>
        </nav>
    )
}