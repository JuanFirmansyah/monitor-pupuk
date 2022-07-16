import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="flex flex-col w-full h-20 border-b-2">
      <nav className="flex flex-row w-full h-full justify-between items-center px-6 bg-[#487585] text-white">
        <div className="flex flex-row w-2/3">
          <Link href="/">
            <button className="flex w-auto font-medium text-sm md:text-2xl text-left">
              <span>
                PUPUK SRIWIDJAJA <br></br> PALEMBANG
              </span>
            </button>
          </Link>
        </div>

        <div className="md:flex hidden flex-col md:flex-row justify-end w-1/2 h-auto text-base space-x-9 md:space-x-9">
          <div>powered by</div>
          <div>-</div>
          <div className="pr-6">MUSA</div>
        </div>

        <div className="flex flex-row w-1/2 border-l-4 border-white h-full justify-center gap-x-6 items-center">
          <div className="ml-3 relative h-12 w-12">
            <Image src="/juan.png" layout="fill" className="rounded-full" />
          </div>
          <div>Juan Firmansyah</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8 hover:bg-slate-600 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
