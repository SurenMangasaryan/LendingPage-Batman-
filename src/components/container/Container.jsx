import React, { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../../features/context/Context'
import Routing from '../../features/routing/Routing'
import trailer from '/React-Lessons/batman-lending-page/src/videos/trailer.mp4'
import { AiOutlineClose } from 'react-icons/ai'
import { useTransitionEffects } from '../../features/hooks/useTransitionEffect'
import '../container/Container.css'

const Container = () => {

    const { checkTrailerBool, setCheckTrailerBool } = useContext(MyContext);
    const trailerRef = useRef();

    const handleChangeBool = () => {
        setCheckTrailerBool(false);
    }

    useEffect(() => {
        if (!checkTrailerBool) {
            trailerRef.current.style.display = "none";
        }
    }, [checkTrailerBool])

    useTransitionEffects(trailerRef, checkTrailerBool);

    return (
        <div className='container'>
            <div className='container-box'>
                <Routing />
            </div>
            <div className={`trailer-div`} ref={trailerRef}>
                {checkTrailerBool ? <video src={trailer} controls autoPlay></video> : null}
                <AiOutlineClose className='close' onClick={handleChangeBool} />
            </div>
        </div>
    )
}

export default Container