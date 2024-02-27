'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
export default function Header() {

    const onMenuToggle = (e) => {
        const navlinks = document.querySelector(".navLinks");
        e.name = e.name === "menu" ? "close" : "menu";
        navlinks.classList.toggle("left-[0%]");
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
                        className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
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
                            className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#AAB6867E] to-[#98C11F] border-solid border-2 border-[#98C11F]  font-bold text-white px-5 py-2 rounded-full "
                        >
                            Contactez nous
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
