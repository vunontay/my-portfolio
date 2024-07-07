"use client";

import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
    return (
        <div className="h-full">
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* IMAGE CONTAINER */}
                <div className="justify-end lg:block h-1/3 lg:h-full lg:w-1/2 relative z-0">
                    <Image
                        src="/img2.png"
                        alt="Hero Image"
                        fill
                        className="object-contain"
                    />
                </div>
                {/* TEXT CONTAINER */}
                <div className="relative  lg:mt-0 z-10  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                    {/* TITLE */}
                    <h1 className="mt-4 lg:mt text-2xl md:text-4xl font-bold text-center">
                        Elevating Digital Experiences Through Code and Design
                    </h1>
                    {/* DESC */}
                    <p className="md:text-xl text-center">
                        Welcome to my portfolio, where creativity meets
                        technology. As a passionate web developer, I specialize
                        in crafting responsive, user-friendly websites that not
                        only look stunning but also deliver seamless
                        functionality. Dive into my projects and discover how I
                        transform ideas into engaging digital experiences.
                    </p>
                    {/* BUTTONS */}
                    <div className="w-full flex gap-4 justify-center">
                        <Link
                            href={"/portfolio"}
                            className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
                        >
                            View My Work
                        </Link>
                        <Link
                            href={"/about"}
                            className="p-4 rounded-lg ring-1 ring-black"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
