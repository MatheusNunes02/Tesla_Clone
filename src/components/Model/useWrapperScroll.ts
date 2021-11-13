import { useMotionValue } from "framer-motion"
import { useContext, useEffect } from "react";

import ModelsContext from "./ModelsContext";

export default function useWrapperScroll(){
    const { wrapperRef } = useContext(ModelsContext);
    
    const scrollY = useMotionValue(0);
    const scrollYProgress = useMotionValue(0);

    // useEffect(()=>{
    //     scrollY.onChange(scrolly =>{
    //         console.log({scrolly})
    //     })
    //     scrollYProgress.onChange(scrolly =>{
    //         console.log({scrolly})
    //     })
    // }, [scrollY, scrollYProgress]);


    useEffect(()=>{
        const element = wrapperRef.current;

        if(element){
            const updateScrollValue = () =>{
                const { scrollTop, scrollHeight, offsetHeight} = element;

                const fullScroll = scrollHeight - offsetHeight;

                scrollY.set(scrollTop)
                scrollYProgress.set(scrollTop/ fullScroll)
            }

            element?.addEventListener('scroll', updateScrollValue);

            return () => element?.removeEventListener('scroll', updateScrollValue)
        }
    },[scrollY, scrollYProgress, wrapperRef])

    return {scrollY, scrollYProgress}
}
