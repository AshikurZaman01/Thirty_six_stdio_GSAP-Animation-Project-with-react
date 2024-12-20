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
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = canvasImages[index.value];

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            }
        }
    }, [index.value]);



    return (
        <div>
            <canvas id='canvas'
                ref={canvasRef}

                style={{
                    width: `${size}px`, height: `${size}px`

                }}
            >
            </canvas>
        </div>
    )
}

export default CanvasSection