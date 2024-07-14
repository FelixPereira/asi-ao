'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAV_MENU } from '@/constants';
import { useState } from 'react';
import MobileNavigation from '../modal/MobileNavigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className='
      bg-primary
        p-5
        w-full
      '
    >
      <div
        className='
          container
          flex
          justify-between
          relative
          items-center
          gap-5
        '
      >
        <Link href='/'>
          <Image
            src='/assets/images/logo-white.png'
            alt='logotipo'
            width={100}
            height={30}
          />
        </Link>
        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />

        <nav className='hidden md:block'>
          <ul className='flex flex-col gap-10 md:flex-row'>
            {NAV_MENU.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='
              text-light-1 
              font-semibold 
              hover:text-secondary 
              text-[16px]
            '
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href='/'
          className='
         bg-light-1
          text-primary
          px-3
          py-2
          rounded-sm
          font-semibold
          border-none
          hover:bg-secondary
          hover:text-light-1
          duration-300
          text-[14px]
          hidden
          md:block
        '
        >
          Registar-se
        </Link>
      </div>
    </header>
  );
};

export default Header;
