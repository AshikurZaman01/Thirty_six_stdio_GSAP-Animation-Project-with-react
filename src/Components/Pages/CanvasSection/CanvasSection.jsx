import { useRef, useState } from 'react'
import canvasImages from '../../../assets/Images/Images'
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CanvasSection = ({ details }) => {

    const { startIndex, numImages, duration, size, top, left, zIndex } = details;

    const [index, setIndex] = useState({ value: details.startIndex })
    const canvasRef = useRef();

    useGSAP(() => {

        gsap.to(index, {
            value: details.startIndex + details.numImages - 1,
            duration: details.duration,
            ease: 'linear',
            repeat: -1,
            onUpdate: () => {
                setIndex({ value: Math.round(index.value) })
            }
        })

    })


    useEffect(() => {

        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = canvasImages[index.value];

            img.onload = () => {
                canvas.width = canvas.offsetWidth * scale;
                canvas.height = canvas.offsetHeight * scale;
                canvas.style.width = canvas.offsetWidth + "px";
                canvas.style.height = canvas.offsetHeight + "px";

                ctx.scale(scale, scale);
                ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
            }
        }
    }, [index.value]);



    return (
        <div>
            <canvas
                data-scroll
                data-scroll-speed={Math.random().toFixed(1)}
                id='canvas'
                ref={canvasRef}
                className='absolute'

                style={{
                    width: `${size}px`, height: `${size}px`, top: `${top}%`, left: `${left}%`, zIndex: `${zIndex}`

                }}
            >
            </canvas>
        </div>
    )
}

export default CanvasSection