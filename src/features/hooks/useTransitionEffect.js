import { useCallback, useEffect } from "react";

export const useTransitionEffects = (refElement, checkBoolean) => {

    const transitionEffect = useCallback(() => {
        let showTimeOut;
        let closeTimeOut;
        if (checkBoolean) {
            refElement.current.style.display = "flex";
            showTimeOut = setTimeout(() => {
                refElement.current.style.opacity = "1";
                refElement.current.style.paddingRight = "20px";
                refElement.current.style.transition = "all .5s linear";
            }, 0)

            return () => {
                clearTimeout(showTimeOut);
            }
        }
        if (!checkBoolean) {
            closeTimeOut = setTimeout(() => {
                refElement.current.style.opacity = "0";
                refElement.current.style.paddingRight = "0px";
                refElement.current.style.transition = "all .5s linear";
            }, 0)

            closeTimeOut = setTimeout(() => {
                refElement.current.style.display = "none";
            }, 500)

            return () => {
                clearTimeout(closeTimeOut);
            }
        }
    }, [refElement, checkBoolean])

    useEffect(() => {
        transitionEffect()
    }, [refElement, checkBoolean, transitionEffect])
}