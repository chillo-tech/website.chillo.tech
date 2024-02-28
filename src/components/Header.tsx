'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import NavigationLinks from './NavigationLinks';
import { Icons } from './Icons';

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
                    <NavigationLinks className="hidden md:flex" />
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#AAB6867E] to-[#98C11F] border-solid border-2 border-[#98C11F]  font-bold text-white px-5 py-2 rounded-full "
                        >
                            Contactez nous
                        </button>
                        <Icons.whatsapp className="w-6 h-6" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
