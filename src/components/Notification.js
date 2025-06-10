import React from 'react';

export default function Notification({ data }) {
  const { title, texts } = data;

  return (
    <div className="">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {texts && texts.map((text, index) => <p key={index} className="mt-2">{text}</p>)}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4">
        Continue
      </button>
    </div>
  );
}
