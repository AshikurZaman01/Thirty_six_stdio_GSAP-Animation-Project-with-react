import CircleText from "./CircleText";

const Banner = () => {
    return (
        <div className="mt-28 ">

            <div className="w-full px-10 md:px-20 lg:px-[20%] flex items-center justify-center gap-28">
                <div className="max-w-lg">
                    <h3 className="text-3xl font-semibold font-Funnel_Display mb-6">
                        At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
                    </h3>
                    <p className="font-medium text-white p-4 rounded-md font-Funnel_Display ">
                        We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.
                    </p>

                    <p className="font-medium text-white p-4 rounded-md text-xl font-Funnel_Display">
                        scroll
                    </p>

                </div>

                <div className=" flex-1 -mt-[50px]">
                    <CircleText></CircleText>
                </div>
            </div>

            <div className="w-full  absolute bottom-0 left-0  pl-10 ">

                <h1 className="text-9xl font-normal tracking-tight  font-Funnel_Display">Thirtysixstudios</h1>
            </div>

        </div>
    );
};

export default Banner;
