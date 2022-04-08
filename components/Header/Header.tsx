import { UserCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';

const Header = () => {
  const { user, error, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="relative flex h-10 items-center justify-between bg-gray-400 px-5 py-6 shadow-md">
      <p className="text-sm font-bold text-white">Brand Logo</p>

      <div onClick={toggleDropdown}>
        {user && !isLoading ? (
          <img
            src={'' + user?.picture}
            width="28px"
            height="28px"
            className="rounded-full"
          />
        ) : (
          <UserCircleIcon className="h-7 rounded-full bg-blue-300 text-white" />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-[58px] right-[10px] flex  w-[100px] flex-col rounded-lg bg-slate-100 p-3 text-sm shadow-lg">
          {user && !isLoading ? (
            <>
              <Link href={'/profile'}>Profile</Link>
              <a href="/api/auth/logout">Logout</a>
            </>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
