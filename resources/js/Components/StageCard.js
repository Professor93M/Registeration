import { Down, Up } from "@/animations";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

const StageCard = ({ title, description, active, className, link, icon }) => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 500);
    }, []);

    return (
        <Link
            href={link}
            className={` group relative overflow-hidden ${
                active
                    ? className
                    : "pointer-events-none  text-gray-400 rounded-lg"
            } p-6 col-span-1 transform ${
                visible
                    ? "opacity-100 transition-opacity duration-[1000ms] ease-in-out rounded-lg"
                    : "opacity-0"
            } `}
        >
            <div
                className={`
            front absolute h-full border-none  flex  gap-y-4 flex-col overflow-hidden w-full justify-center items-center top-0 left-0 duration-500 z-10   group-hover:-translate-y-48
            ${
                active
                    ? className
                    : "pointer-events-none bg-gray-300 text-gray-400 rounded-lg"
            } 
           `}
            >
                <p
                    variants={Down}
                    initial="hidden"
                    animate="show"
                    className="mt-4  text-lg leading-relaxed text-gray-600"
                >
                    {icon}
                </p>
                <h1
                    variants={Up}
                    initial="hidden"
                    animate="show"
                    className="text-3xl  font-bold leading-tight text-gray-900"
                >
                    {title}
                </h1>
            </div>
            <div
                className={`back  front absolute w-full h-full  flex items-center justify-center border-none bottom-0 left-0 ${
                    active
                        ? className
                        : "pointer-events-none bg-gray-300 text-gray-400 rounded-lg"
                }`}
            >
                <p className="mt-4 opacity-0 group-hover:opacity-100 duration-700 delay-300  text-lg leading-relaxed text-gray-600">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default StageCard;
