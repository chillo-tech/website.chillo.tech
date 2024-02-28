'use client';

import Link from 'next/link';
import Image from 'next/image';
import {Icons} from './Icons';
import {useState} from "react";
import {cn} from "@/lib/utils";
import {title2} from "@/assets/fonts";
import {lang} from "@/lang";
import {Button} from "@/components/ui/button";

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)

    const onMenuToggle = (e) => {
        const navLinks = document.querySelector(".navLinks");
        setToggleMenu(!toggleMenu)
        console.log(navLinks)
        switch (toggleMenu) {
            case true :
                navLinks.classList.add("left-[0%]")
                navLinks.classList.remove("left-[-150%]")
                break;
            case false :
                navLinks.classList.add("left-[-150%]")
                navLinks.classList.remove("left-[0%]")
                break;
            default:
                navLinks.classList.add("left-[0%]")
                navLinks.classList.remove("left-[-150%]")
                break;
        }
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
                        <Button
                            variant={'outline'}
                            className={cn(
                                'bg-green border-none font-semibold text-white hover:bg-green/80 rounded-full',
                                title2.className
                            )}>
                            {lang.contact_btn}
                        </Button>
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
