const CircleText = () => {
    return (
        <div className="flex items-center justify-center text-white">
            <svg
                className="w-48 h-48 animate-rotate"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <path
                        id="circlePath"
                        d="M 50,50
                        m -30,0
                        a 30,30 0 1,1 60,0
                        a 30,30 0 1,1 -60,0"
                    />
                </defs>
                <text fill="#000" fontSize="4.5" fontWeight="1000" className="font-Funnel_Display"> 
                    <textPath
                        href="#circlePath"
                        startOffset="0"
                        spacing="exact"
                    >
                        THIRTYSIXSTUDIO  — FOR ALL THINGS DIGITAL PRODUCTION — THIRTYSIXSTUDIO —
                    </textPath>
                </text>
            </svg>
            <style jsx>{`
                @keyframes rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                .animate-rotate {
                    animation: rotate 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default CircleText;
