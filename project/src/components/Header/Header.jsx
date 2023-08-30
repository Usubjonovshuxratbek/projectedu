import React from 'react'
import './Header.css'
import bg from '../../assets/img/bg.jpg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <div className="logo">
                    <a href="/"><img src='https://andqxai.uz/wp-content/uploads/2022/06/logo.png' alt="" /></a>
                </div>
                <div className="info">
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </div>
            </nav>
            <section className='hero'>
                <img src={bg} alt="" />
            </section>
        </header>
    )
}

export default Header
