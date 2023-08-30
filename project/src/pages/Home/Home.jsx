import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import './Home.css'
import { Container } from 'reactstrap'

function Home() {
    return (
        <div className='home'>
            <Container>
                <Header />
                <Card />
            </Container>
        </div>
    )
}

export default Home
