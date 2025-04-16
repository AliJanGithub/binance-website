const BalanceCard = () => {
    return (
      <section className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Estimated Balance</h2>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">0.4705</span>
              <span className="text-blue-400 text-sm">BTC</span>
            </div>
            <span className="text-sm text-gray-400">$45,000 USD</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-semibold focus:outline-none">Deposit</button>
            <button className="bg-transparent border border-gray-700 text-gray-300 rounded-md px-4 py-2 text-sm font-semibold focus:outline-none">Withdraw</button>
            <button className="bg-transparent border border-gray-700 text-gray-300 rounded-md px-4 py-2 text-sm font-semibold focus:outline-none">Transfer</button>
            <button className="bg-transparent border border-gray-700 text-gray-300 rounded-md px-4 py-2 text-sm font-semibold focus:outline-none">More</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default BalanceCard;