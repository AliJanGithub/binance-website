import { SearchIcon } from '@heroicons/react/24/outline';

const AssetAllocation = () => {
  const assets = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', total: '0.45684', available: '$0.00', frozen: '$0.00', valuation: '$0.00' },
    { id: 2, name: 'Bitcoin Cash', symbol: 'BCH', total: '$0.00', available: '$0.00', frozen: '$0.00', valuation: '$0.00' },
    { id: 3, name: 'Stellar', symbol: 'XLM', total: '$0.00', available: '$0.00', frozen: '$0.00', valuation: '$0.00' },
    { id: 4, name: 'Near Protocol', symbol: 'NEAR', total: '$0.00', available: '$0.00', frozen: '$0.00', valuation: '$0.00' },
    { id: 5, name: 'Tether', symbol: 'USDT', total: '$0.00', available: '$0.00', frozen: '$0.00', valuation: '$0.00' },
    // Add more dummy assets
  ];

  return (
    <section className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Asset Allocation</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/* <SearchIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" /> */}
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none"
            />
          </div>
          <button className="text-blue-500 text-sm hover:underline focus:outline-none">Spot</button>
          <button className="text-gray-400 text-sm hover:underline focus:outline-none">Deposit</button>
          <button className="text-gray-400 text-sm hover:underline focus:outline-none">Withdraw</button>
          <button className="text-gray-400 text-sm hover:underline focus:outline-none">Trade</button>
          <button className="text-gray-400 text-sm hover:underline focus:outline-none">Hide Small Balances</button>
          <button className="text-gray-400 text-sm hover:underline focus:outline-none">Simplified List</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2 pr-4">#</th>
              <th className="py-2 pr-4">Coin</th>
              <th className="py-2 pr-4">Total</th>
              <th className="py-2 pr-4">Available Balance</th>
              <th className="py-2 pr-4">Frozen Balance</th>
              <th className="py-2 pr-4">Est. Valuation</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="border-b border-gray-700">
                <td className="py-3 pr-4 text-sm">{asset.id}</td>
                <td className="py-3 pr-4 text-sm flex items-center">
                  {/* You might want to add coin icons here */}
                  <span className="font-semibold mr-1">{asset.name}</span>
                  <span className="text-gray-400 text-xs">({asset.symbol})</span>
                </td>
                <td className="py-3 pr-4 text-sm">{asset.total}</td>
                <td className="py-3 pr-4 text-sm">{asset.available}</td>
                <td className="py-3 pr-4 text-sm">{asset.frozen}</td>
                <td className="py-3 pr-4 text-sm">{asset.valuation}</td>
                <td className="py-3">
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1 text-xs font-semibold focus:outline-none">Deposit</button>
                    <button className="bg-transparent border border-gray-700 text-gray-300 rounded-md px-2 py-1 text-xs font-semibold focus:outline-none">Withdraw</button>
                    <button className="bg-green-500 text-white rounded-md px-2 py-1 text-xs font-semibold focus:outline-none">Trade</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span>Showing 1 to 10 of 100 entries</span>
        <div className="flex items-center space-x-2">
          <button className="focus:outline-none">&lt;</button>
          <span>1 2 3 ... 10</span>
          <button className="focus:outline-none">&gt;</button>
          <select className="bg-gray-700 rounded-md text-xs focus:outline-none">
            <option>10 / page</option>
            <option>20 / page</option>
            <option>50 / page</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default AssetAllocation;