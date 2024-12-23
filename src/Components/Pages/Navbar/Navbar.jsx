import { useState } from "react";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className="w-full h-16 text-black fixed top-0 left-0">
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-full font-Funnel_Display">

                {/* Brand */}
                <div>
                    <h1 className="text-2xl font-semibold">Brand</h1>
                </div>

                <div className="text-2xl  cursor-pointer p-1  bg-white  rounded-t-full rounded-b-full rounded-l-lg rounded-r-lg hover:text-green-600 transition-all duration-300 hover:scale-105">
                    {
                        isDark ? <IoMoonOutline onClick={() => setIsDark(false)} /> : <GoSun onClick={() => setIsDark(true)} />
                    }
                </div>

                {/* Navigation Links */}
                <div className="flex gap-10">
                    {['What We Do', 'Who We Are', 'How We Give Back', 'Talk To Us'].map((item, index) => (
                        <a
                            href={`#${item}`}
                            key={index}
                            className="hover:text-gray-700 transition-colors font-semibold"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
