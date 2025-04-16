import { ArrowRightIcon } from '@heroicons/react/24/outline';

const SpotTradingFees = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold">Spot Trading Fees</h3>
          <div className="flex items-center space-x-4 mt-2">
            <div>
              <p className="text-xs text-gray-400">Maker Fee</p>
              <div className="relative w-24 h-4 bg-gray-700 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-1/4 rounded-full"></div>
              </div>
              <span className="text-xs text-green-500">0.1%</span>
            </div>
            <div>
              <p className="text-xs text-gray-400">Taker Fee</p>
              <div className="relative w-24 h-4 bg-gray-700 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-1/5 rounded-full"></div>
              </div>
              <span className="text-xs text-red-500">0.2%</span>
            </div>
          </div>
        </div>
        <a href="#" className="text-blue-500 text-sm hover:underline focus:outline-none flex items-center">
          Details <ArrowRightIcon className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default SpotTradingFees;