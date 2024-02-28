'use client';

import Link from 'next/link';
import Image from 'next/image';
import {Icons} from './Icons';
import {useState} from "react";

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)

    const onMenuToggle = (e) => {
        const navlinks = document.querySelector(".navLinks");
        setToggleMenu(!toggleMenu)
        console.log(navlinks)
        navlinks.classList.toggle("left-[-150%]")
    }

    return (
        <header className="w-full relative py-2">
            <nav className="flex justify-between">
                <div className="w-[130px] md:w-[200px] flex items-center">
                    <Link href={"/"} className="">
                        <Image
                            src={"/images/chillo-services.webp"}
                            width={150}
                            height={50}
                            priority={true}
                            alt="Logo Chillo Tech"
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <div
                        className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[0%] px-5 md:py-0 py-5 ">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#AAB6867E] to-[#98C11F]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <a href="#">À propos de nous</a>
                            </li>
                            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#AAB6867E] to-[#98C11F]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <a href="#">Comment ça marche</a>
                            </li>
                            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#AAB6867E] to-[#98C11F]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <a href="#">Services</a>
                            </li>
                            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#AAB6867E] to-[#98C11F]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <a href="#">Tarifs</a>
                            </li>
                            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#AAB6867E] to-[#98C11F]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#AAB6867E] to-[#98C11F] border-solid border-2 border-[#98C11F]  font-bold text-white lg:px-5 lg:py-2 rounded-full md:text-sm text-xs p-2"
                        >
                            Contactez nous
                        </button>
                        {toggleMenu ? <Icons.menu
                                name={'menu'}
                                onClick={(e) => onMenuToggle(e)}
                                className="w-6 h-6 text-[30px] cursor-pointer md:hidden"
                            /> :
                            <Icons.x
                                name={'menu'}
                                onClick={(e) => onMenuToggle(e)}
                                className="w-6 h-6 text-[30px] cursor-pointer md:hidden"
                            />
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}
