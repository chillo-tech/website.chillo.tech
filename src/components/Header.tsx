'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavigationLinks from './NavigationLinks';

export default function Header() {
  return (
    <header className="w-full sticky top-0 p-8 bg-gray">
      <nav className="flex justify-between">
        <div className="w-64 flex items-center">
          <Link href={'/'} className="">
            <Image
              src={'/images/chillo-services.webp'}
              width={150}
              height={50}
              priority={true}
              alt="Logo Chillo Tech"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <NavigationLinks />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#AAB6867E] to-[#98C11F] border-solid border-2 border-[#98C11F]  font-bold text-white hover:text-blue px-5 py-2 rounded-full ">
              Contactez nous
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
