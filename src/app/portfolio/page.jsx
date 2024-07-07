"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        color: "from-pink-300 via-purple-300 to-indigo-400",
        title: "Music App",
        desc: "Online music website.",
        img: "/image.png",
        link: "https://music-app-vv.vercel.app/",
    },
    {
        id: 2,
        color: "from-green-300 via-blue-300 to-purple-400",
        title: "Ricky Shop",
        desc: "A website that sells pet food and supplies.",
        img: "/image2.png",
        link: "https://e-commerce-pet.vercel.app/",
    },
    {
        id: 3,
        color: "from-yellow-300 via-orange-300 to-red-400",
        title: "Ciseco Fashion Shop",
        desc: "A website specializing in selling fashion.",
        img: "/image3.png",
        link: "",
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-100vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`px-4 sm:px-0 h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col items-center gap-8 text-white">
                                    <h1 className="text-xl  md:text-2xl lg:text-4xl xl:text-6xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative rounded-3xl overflow-hidden w-96 h-80 md:w-96 md:h-64 lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[360px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className=" lg:text-lg">{item.desc}</p>
                                    <Link
                                        href={item.link}
                                        className="flex justify-end"
                                    >
                                        <button className="p-2 text-sm  md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded">
                                            See Demo
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath
                                xlinkHref="#circlePath"
                                className="text-xl"
                            >
                                Web Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;
