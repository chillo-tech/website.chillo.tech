'use client';

import Icons from '@/components/commons/Icons';
import {useState} from 'react';
import {cn} from '@/lib/utils';
import {title2} from '@/assets/fonts';
import {lang} from '@/lang';
import {Button} from '@/components/ui/button';
import Logo from '@/components/commons/Logo';
import NavigationLinks from '@/components/commons/NavigationLinks';
import {ROUTE_CONTACT} from "@/config/routes";
import Link from "next/link";
import SocialMediaLinks from "@/components/commons/SocialMediaLinks";

function Header() {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    const onMenuToggle = (e: any) => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <header className="w-full h-max flex justify-center py-5 px-3 sticky top-0 z-40 bg-white">
            <section className="container h-max w-full hidden lg:block">
                <section className="w-full relative py-2">
                    <section className="flex justify-between">
                        <Logo/>
                        <div className="flex items-center gap-3">
                            <div className="static w-full bg-white flex items-center px-5">
                                <NavigationLinks
                                    className="md:gap-[2vw] gap-8"
                                    linkClassName="font-medium"
                                />
                            </div>
                            <div className="">
                                <Link href={ROUTE_CONTACT}>
                                    <Button
                                        variant={'outline'}
                                        className={cn(
                                            'bg-green border-none font-semibold text-white hover:bg-green/80 rounded-full',
                                            title2.className
                                        )}>
                                        {lang.contact_btn}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <section className="container h-max w-full block lg:hidden">
                <section className="flex justify-between">
                    <Logo/>
                    <div className="flex items-center">
                        <div className={!toggleMenu ? 'hidden' : 'block'}>
                            <Link href={ROUTE_CONTACT}>
                                <Button
                                    variant={'outline'}
                                    className={cn(
                                        'bg-green border-none font-semibold text-white hover:bg-green/80 rounded-full',
                                        title2.className
                                    )}>
                                    {lang.contact_btn}
                                </Button>
                            </Link>
                        </div>
                        {toggleMenu ? (
                            <Icons.menu
                                name={'menu'}
                                onClick={(e) => onMenuToggle(e)}
                                className="ml-5 w-6 h-6 text-[30px] cursor-pointer lg:hidden"
                            />
                        ) : (
                            <Icons.x
                                name={'menu'}
                                onClick={(e) => onMenuToggle(e)}
                                className="ml-5 w-6 h-6 text-[30px] cursor-pointer lg:hidden"
                            />
                        )}
                    </div>
                </section>
                <section className={`h-screen w-screen py-8 pl-5 ${toggleMenu ? ' hidden' : ''}`}>
                    <NavigationLinks
                        className="md:flex-col md:items-start gap-8 md:gap-8 mb-8"
                        linkClassName="font-medium"
                        closeMenu={(e) => onMenuToggle(e)}
                    />
                    <Link href={ROUTE_CONTACT}>
                        <Button
                            variant={'outline'}
                            className={cn(
                                'bg-green border-none font-semibold text-white hover:bg-green/80 rounded-full',
                                title2.className
                            )}>
                            {lang.contact_btn}
                        </Button>
                    </Link>
                    <SocialMediaLinks className="justify-start mt-5"/>
                </section>
            </section>
        </header>
    );
}

export default Header
