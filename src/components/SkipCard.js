import React from 'react';
import HirePeriod from './HirePeriod';
import Title from './Title';
import Price from './Price';
import AllowedOnRoad from './AllowedOnRoad';

export default function SkipCard({ title, price, hirePeriod, allowedOnRoad, children, isSelected }) {
  return (
    <div className={`hover:scale-125 hover:z-50 ease-in-out backdrop-blur-[10px] bg-white relative overflow-hidden rounded-2xl shadow-xl border hover:ring-2 hover:ring-blue-400 transition-all duration-300 p-6 space-y-4 hover:bg-opacity-100 ${allowedOnRoad ? 'border-blue-500' : 'border-red-400'} ${isSelected ? 'bg-opacity-100 font-bold':'bg-opacity-55'}`}>
      <div className="flex justify-between items-center">
        <Title title={title} />
        <Price price={price} />
      </div>
      <HirePeriod hirePeriod={hirePeriod} />
      <AllowedOnRoad allowedOnRoad={allowedOnRoad} />
      {children}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-700"></div>
    </div>
  )
}
