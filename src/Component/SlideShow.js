import React, { useEffect, useRef } from "react";
import { useState } from "react";
import '../App.css'
import { images } from "../HandleImagess";

function Slide(){

    const [index,setIndex] = useState(0);
    const imgRef = useRef(null)
    

    const next = () => {
        const lastIndex = images.length - 1;
        const newIndex = index === lastIndex ? 0 : index + 1;
        setIndex(newIndex);
    }

    useEffect(() => {
        const img = imgRef.current;
        setTimeout(()=>{
            img.style.opacity = '0';
        },7000)
        setTimeout(next,8000);
        setTimeout(()=>{
            img.style.opacity = '0.7';
        },9000)
    },[index])
    
    return(
        <div className="SlideShow">
            <img ref={imgRef} src={images[index]} />
        </div>
    )
}

export default Slide;