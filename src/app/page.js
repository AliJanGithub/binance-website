import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import SpotTradingFees from './components/potTradingFees';
import AssetAllocation from './components/AssetAllocation';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-300 font-sans">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Header />
        <BalanceCard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SpotTradingFees />
          {/* You can add more components here in a grid layout */}
        </div>
        <AssetAllocation />
        {/* Add other sections of your UI here */}
      </main>
    </div>
  );
}