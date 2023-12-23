import React from 'react'
import LeftPanel from '../../../features/sectionFeatures/moviePgeFeature/LeftPanel/LeftPanel'
import RightPanel from '../../../features/sectionFeatures/moviePgeFeature/RightPanel/RightPanel'
import './MoviePage.css'

const MoviePage = () => {
    return (
        <div className='movie-page'>
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default MoviePage