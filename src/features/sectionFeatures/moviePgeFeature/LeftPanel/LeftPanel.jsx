import React, { useContext } from 'react'
import { MyContext } from '../../../context/Context'
import { MdOutlineNotStarted } from 'react-icons/md'
import { MdPauseCircleOutline } from 'react-icons/md'
import './LeftPanel.css'

const LeftPanel = () => {

    const { checkTrailerBool, setCheckTrailerBool } = useContext(MyContext);

    const handleStartTrailer = () => {
        setCheckTrailerBool(true);
    }

    return (
        <div className='left-panel'>
            <h2 className='left-title'>put on an <span>evil</span> face</h2>
            <p className='left-description'>From Warner Bros. Pictures comes Matt Reeves’ The Batman, starring Robert Pattinson in the dual role of Gotham City’s vigilante detective and his alter ego, reclusive billionaire Bruce Wayne.
                Starring alongside Pattinson (Tenet, The Lighthouse) as Gotham’s famous and infamous cast of characters are Zoë Kravitz (Big Little Lies, Fantastic Beasts: The Crimes of Grindelwald) as Selina Kyle; Paul Dano (Love & Mercy, 12 Years a Slave) as Edward Nashton; Jeffrey Wright (No Time to Die, Westworld) as the GCPD’s James Gordon; John Turturro (the Transformers films, The Plot Against America) as Carmine Falcone; Peter Sarsgaard (The Magnificent Seven, Interrogation) as Gotham D.A. Gil Colson; Jayme Lawson (Farewell Amor) as mayoral candidate Bella Reál; with Andy Serkis (the Planet of the Apes films, Black Panther) as Alfred; and Colin Farrell (The Gentlemen, Fantastic Beasts and Where to Find Them) as Oswald Cobblepot.</p>
            <div className='trailer-title-div'>
                {checkTrailerBool ? <MdPauseCircleOutline className='left-icon' /> : <MdOutlineNotStarted className='left-icon' onClick={handleStartTrailer} />}
                <h3 className='trailer-title'>Watch Trailer</h3>
            </div>

        </div>
    )
}

export default LeftPanel