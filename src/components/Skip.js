import React from 'react';
import SkipCard from './SkipCard';
import { toast } from "react-toastify";

export default function Skip({ skip, setSelectedSkip, selectedSkip, isSelected }) {
  const handleSelect = () => {
    if (setSelectedSkip) {
      if (selectedSkip === null || selectedSkip.id !== skip.id) {
        toast.dismiss();
        return setSelectedSkip(skip);
      } else if (selectedSkip.id === skip.id) {
        setSelectedSkip(null)
      }
    }
  };
  return (
    <SkipCard title={skip.size} price={skip.price_before_vat} hirePeriod={skip.hire_period_days} allowedOnRoad={skip.allowed_on_road} isSelected={isSelected}>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4" onClick={handleSelect}>
        Select
      </button>
    </SkipCard>
  );
}
