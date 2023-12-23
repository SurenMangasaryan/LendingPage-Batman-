import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import MoviePage from '../../components/section/moviePage/MoviePage'
import CharacterPage from '../../components/section/characterPage/CharacterPage'

const Routing = () => {
    return (
        <Routes>
            <Route path='' element={<Layout />} >
                <Route path='' element={<MoviePage />} />
                <Route path='/character' element={<CharacterPage />} />
            </Route>
        </Routes>
    )
}

export default Routing