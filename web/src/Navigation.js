import React from 'react';

const Navigation = () => {
  return (
    <div className="bg-gray-900 p-4 grid grid-rows-3 gap-4">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mr-4 bg-[#A5693D]">
            <img
              src="https://cdn-icons-png.freepik.com/512/11405/11405680.png"
              alt="Goals Icon"
            />
          </div>
          <span>Goals</span>
        </div>
        <button className="text-white w-5 bg-zinc-600 rounded-full">
          {'>'}
        </button>
      </div>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mr-4 bg-[#3498DB]">
            <img
              src="https://cdn-icons-png.freepik.com/512/9142/9142468.png"
              alt="Popular Dishes Icon"
            />
          </div>
          <span>Popular Dishes</span>
        </div>
        <button className="rounded-full text-white w-5 bg-zinc-600">
          {'>'}
        </button>
      </div>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mr-4 bg-[#17A589]">
            <img
              src="https://cdn-icons-png.flaticon.com/256/11651/11651625.png"
              alt="Menus Icon"
            />
          </div>
          <span>Menus</span>
        </div>
        <button className="text-white w-5 bg-zinc-600 rounded-full">
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Navigation;
