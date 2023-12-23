import React from 'react'
import Container from './components/container/Container'
import { BrowserRouter } from 'react-router-dom'
import Context from './features/context/Context'
import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Context>
                <Container />
            </Context>
        </BrowserRouter>
    )
}
