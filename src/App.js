import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Skip from './components/Skip';
import Notification from './components/Notification';

export default function App() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSkips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  useEffect(() => {
    if (selectedSkip) {
      toast(<Notification />, {
        data: {
          title: `Selected skip: ${selectedSkip.size} Yard skip`,
          texts: [`Price: £${selectedSkip.price_before_vat}`, `Hire period: ${selectedSkip.hire_period_days} days`]
        }
      });
    } else {
      toast.dismiss();
    }
  }, [selectedSkip]);

  if (loading) return <div className="text-center py-20">Loading skip options...</div>;
  if (error) return <div className="text-center py-20 text-red-600">Error: {error}</div>;

  return (
    <>
      <div className="text-gray-900 min-h-screen py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-5xl font-extrabold tracking-tight">Find the Right Skip Size</h1>
            <p className="text-lg text-gray-600 mt-4">Select the best skip size based on your project needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skips.map((skip) => (
              <Skip key={skip.id} skip={skip} setSelectedSkip={setSelectedSkip} selectedSkip={selectedSkip} isSelected={selectedSkip?.id === skip.id} />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer autoClose={0} />
    </>
  );
}
