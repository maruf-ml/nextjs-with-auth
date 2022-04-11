import { UserCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

type HeaderProps = {
  session: any;
};

const Header = ({ session }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (session !== null) {
    console.log(typeof session.user.image);
    console.log(session.user.email);
  }

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="relative flex h-10 items-center justify-between bg-gray-400 px-5 py-6 shadow-md">
      <p className="text-sm font-bold text-white">Brand Logo</p>

      <div onClick={toggleDropdown} className="h-[28px]">
        {session !== null ? (
          <Image
            src={'' + session?.user?.image}
            width="28px"
            height="28px"
            className="cursor-pointer rounded-full"
          />
        ) : (
          <UserCircleIcon className="h-7 cursor-pointer rounded-full bg-blue-300 text-white" />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-[58px] right-[10px] flex  w-[100px] flex-col rounded-lg bg-slate-100 p-3 text-sm shadow-lg">
          {session !== null ? (
            <>
              <Link href={'/profile'}>Profile</Link>
              <p className="cursor-pointer" onClick={() => signOut()}>
                Logout
              </p>
            </>
          ) : (
            <p className="cursor-pointer" onClick={() => signIn()}>
              Login
            </p>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
