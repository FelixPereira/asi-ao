import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <header
      className='
      bg-primary
        py-5
        px-10
        w-full
        flex
        justify-between
      '
    >
      <Link href='/'>
        <Image
          src='/images/logo-white.png'
          alt='logotipo'
          width={100}
          height={30}
        />
      </Link>
      <button>
        <MenuIcon color='bg-light-1' />
      </button>
    </header>
  );
};

export default Header;
