import { useRef, useState } from 'react'
import canvasImages from '../../../assets/Images/Images'
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CanvasSection = () => {

    const [index, setIndex] = useState({ value: 0 })
    const canvasRef = useRef();

    useGSAP(() => {
        gsap.to(index, {
            value: 149,
            duration: 3,
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
                className='w-[18rem] h-[18rem]'
            >
            </canvas>
        </div>
    )
}

export default CanvasSection