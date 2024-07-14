import { NAV_MENU } from '@/constants';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import React, { SetStateAction } from 'react';

const MobileNavigation = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='md:hidden'>
      <nav
        className={`
          absolute
          bg-light-1
          left-0
          right-0
          pt-5
          pb-10
          px-10
          shadow-md
          transslate
          transition
          duration-300
          ${isOpen ? 'translate-y-16' : '-translate-y-full'}
          ${isOpen ? 'opacity-100' : 'opacity-0'}
          flex flex-col gap-5
        `}
      >
        <ul className='flex flex-col gap-5'>
          {NAV_MENU.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className='
                  text-titleColor 
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
        <Link
          href='/'
          className='
            button 
            mt-4 
            block 
            w-fit 
            px-4 
            py-3 
            rounded-md 
            text-[16px]
          '
        >
          Registar-se
        </Link>
      </nav>
      <button
        className='
          bg-light-1
          p-1
          rounded-sm
        '
      >
        {isOpen ? (
          <XIcon className='text-primary' onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <MenuIcon
            className='text-primary'
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </button>
    </div>
  );
};

export default MobileNavigation;
