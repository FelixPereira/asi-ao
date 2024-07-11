import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const SOCIAL_ICONS = [
  {
    iconPaht: '/icons/facebook.svg',
    href: 'https://www.facebook.com/ASIministries',
    label: 'facebook',
  },
  {
    iconPaht: '/icons/instagram.svg',
    href: '/',
    label: 'instagram',
  },
  {
    iconPaht: '/icons/x.svg',
    href: 'https://twitter.com/ASIministries',
    label: 'x',
  },
  {
    iconPaht: '/icons/youtube.svg',
    href: 'https://twitter.com/ASIministries',
    label: 'youtube',
  },
];

const Footer = () => {
  return (
    <footer
      className='
        bg-secondaryBlue
        pt-16
        pb-5
        flex
        flex-col
        items-center
      '
    >
      <div
        className='
          flex
          flex-col
          items-center
          md:flex-row
          md:items-start
          gap-10
        '
      >
        <div>
          <Link href='/'>
            <Image
              src='/images/logo-white.png'
              alt='Logotipo'
              width={150}
              height={50}
            />
          </Link>
          <div className='flex gap-3 mt-8 items-center'>
            {SOCIAL_ICONS.map((icon) => (
              <Link href={icon.href} key={icon.label} target='_blank'>
                <Image
                  src={icon.iconPaht}
                  alt={icon.label}
                  width={25}
                  height={30}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className='flex items-center flex-col md:items-start '>
          <h3 className='font-semibold text-light-1 text-[20px] mb-5'>
            Contacto
          </h3>
          <div className='flex items-center flex-col gap-3 md:items-start '>
            <span className='flex gap-2 items-center'>
              <Mail color='white' />
              <p className='text-light-1'>geral@asi.ao</p>
            </span>
            <span className='flex gap-2 items-center'>
              <Phone color='white' />
              <p className='text-light-1'>(+244) 9xx xxx xxx</p>
            </span>
            <span className='flex gap-2 items-center'>
              <MapPin color='white' />
              <p className='text-light-1'>Luanda - Angola</p>
            </span>
          </div>
        </div>
      </div>

      <div
        className='
          border-t
          border-textColor
          w-full
          text-center
          mt-16
          pt-3
        '
      >
        <p className='text-textColor text-[14px]'>
          © 2024 ASI |<Link href='/'>By: Inovatech Soluções</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
