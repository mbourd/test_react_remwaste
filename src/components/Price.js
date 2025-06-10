import React from 'react';

export default function Price({ price }) {
  return <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">£{price}</span>;
}
