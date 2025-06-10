import React from 'react';
import { Truck, Ban } from 'lucide-react';

export default function AllowedOnRoad({ allowedOnRoad }) {
  return (
    <div className={`flex items-center gap-2 text-sm font-bold ${allowedOnRoad ? 'text-green-600' : 'text-red-600'}`}>
      {allowedOnRoad ? (
        <Truck className="w-4 h-4 text-green-500" />
      ) : (
        <Ban className="w-4 h-4 text-red-500" />
      )}
      {allowedOnRoad ? 'Allowed on Road' : 'Not Allowed on Road'}
    </div>
  );
}
