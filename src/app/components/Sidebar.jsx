import Link from 'next/link';
import {
  HomeIcon,
  SquaresPlusIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ArrowsRightLeftIcon,
  ClockIcon,
  CogIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'; // Using Heroicons for icons

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 w-64 flex flex-col p-4">
      <div className="flex items-center justify-center mb-6">
        <img src="https://www.mexc.com/static/mexc-logo.svg" alt="MEXC Logo" className="h-8" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <HomeIcon className="h-5 w-5 mr-2" />
              Overview
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 rounded-md bg-gray-700 text-blue-400">
              <SquaresPlusIcon className="h-5 w-5 mr-2" />
              Spot
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <ChartBarIcon className="h-5 w-5 mr-2" />
              Futures
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              Fiat
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <ArrowsRightLeftIcon className="h-5 w-5 mr-2" />
              Margin
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <ClockIcon className="h-5 w-5 mr-2" />
              Funding History
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <CogIcon className="h-5 w-5 mr-2" />
              Setting
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;