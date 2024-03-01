'use client';

import { Icons } from './commons/Icons';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { title2 } from '@/assets/fonts';
import { lang } from '@/lang';
import { Button } from '@/components/ui/button';
import Logo from '@/components/commons/Logo';
import NavigationLinks from '@/components/commons/NavigationLinks';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const onMenuToggle = (e: any) => {
    const navLinks = document.querySelector('.navLinks');
    setToggleMenu(!toggleMenu);
    if (navLinks) {
      switch (toggleMenu) {
        case true:
          navLinks.classList.add('left-[0%]');
          navLinks.classList.remove('left-[-150%]');
          break;
        case false:
          navLinks.classList.add('left-[-150%]');
          navLinks.classList.remove('left-[0%]');
          break;
        default:
          navLinks.classList.add('left-[0%]');
          navLinks.classList.remove('left-[-150%]');
          break;
      }
    }
  };

  return (
    <section className="w-full h-max flex justify-center py-5 px-3 sticky top-0 z-40 bg-white">
      <div className="container h-max w-full">
        <header className="w-full relative py-2">
          <section className="flex justify-between">
            <Logo />
            <div className="flex items-center gap-3">
              <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[0%] px-5 md:py-0 py-5 ">
                <NavigationLinks
                  className="md:gap-[2vw] gap-8"
                  linkClassName="font-medium"
                />
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
                {toggleMenu ? (
                  <Icons.menu
                    name={'menu'}
                    onClick={(e) => onMenuToggle(e)}
                    className="w-6 h-6 text-[30px] cursor-pointer md:hidden"
                  />
                ) : (
                  <Icons.x
                    name={'menu'}
                    onClick={(e) => onMenuToggle(e)}
                    className="w-6 h-6 text-[30px] cursor-pointer md:hidden"
                  />
                )}
              </div>
            </div>
          </section>
        </header>
      </div>
    </section>
  );
}
