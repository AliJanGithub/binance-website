import Link from 'next/link';
import { BellIcon, MagnifyingGlassIcon as SearchIcon, UserCircleIcon, ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <button className="mr-4 text-gray-400 focus:outline-none md:hidden">
          <Bars3Icon className="h-6 w-6" />
        </button>
        <nav className="hidden md:flex space-x-4 text-gray-400">
          <Link href="#" className="hover:text-white">Buy Crypto</Link>
          <Link href="#" className="hover:text-white">Markets</Link>
          <Link href="#" className="hover:text-white">Spot</Link>
          <Link href="#" className="hover:text-white">Futures</Link>
          <Link href="#" className="hover:text-white">Android</Link>
          <div className="relative">
            <button className="hover:text-white focus:outline-none flex items-center">
              Events
              <ChevronDownIcon className="h-4 w-4 inline-block ml-1" />
            </button>
            {/* Add dropdown for events if needed */}
          </div>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-semibold focus:outline-none">Deposit</button>
        <button className="text-gray-400 hover:text-white focus:outline-none">
          <BellIcon className="h-5 w-5" />
        </button>
        <button className="text-gray-400 hover:text-white focus:outline-none">
          {/* <SearchIcon className="h-5 w-5" /> */}
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
            <UserCircleIcon className="h-5 w-5 text-gray-400" />
          </div>
          <span className="text-sm">Robert Fox</span>
          <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;