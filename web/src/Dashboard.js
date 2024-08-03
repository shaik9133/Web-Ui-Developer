import React from 'react';
import ActivityChart from './ActivityChart';
import OrderTable from './OrderTable';
import Navigation from './Navigation';
import ProgressCircle from './ProgressCircle';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-black min-h-screen text-gray-200 p-16 flex-1">
          <h2 className="text-2xl font-bold pb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="bg-gray-800 p-3 rounded-lg flex flex-col h-32">
              <div className="flex items-center justify-between mb-2">
                <img
                  src="https://static-00.iconduck.com/assets.00/shopping-basket-icon-2048x2048-cfgn3uc4.png"
                  alt="Total Orders Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-sm">Total Orders</p>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">75</h2>
                <span className="text-green-500 pt-1 text-xs flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M12 8L18 14H6L12 8Z"></path>
                  </svg>
                  <p>3%</p>
                </span>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex flex-col h-32">
              <div className="flex items-center justify-between mb-2">
                <img
                  src="https://cdn-icons-png.freepik.com/512/1089/1089843.png"
                  alt="Total Delivered Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-sm">Total Delivered</p>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">70</h2>
                <span className="text-red-500 pt-1 text-xs flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M12 16L6 10H18L12 16Z"></path>
                  </svg>
                  <p>3%</p>
                </span>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex flex-col h-32">
              <div className="flex items-center justify-between mb-2">
                <img
                  src="https://cdn-icons-png.freepik.com/512/4933/4933646.png"
                  alt="Total Cancelled Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-sm">Total Cancelled</p>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">05</h2>
                <span className="text-green-500 pt-1 text-xs flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M12 8L18 14H6L12 8Z"></path>
                  </svg>
                  <p>3%</p>
                </span>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-between h-32">
              <div className="flex items-center">
                <ProgressCircle />
                <div className="ml-2 w-32">
                  <h3 className="text-lg font-semibold">Net Profit</h3>
                  <div className="text-2xl font-bold">$6759.25</div>
                  <div className="text-green-500 mt-1 text-xs">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-1"
                      >
                        <path d="M12 8L18 14H6L12 8Z"></path>
                      </svg>
                      <p>3%</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-700 p-4 rounded-lg lg:col-span-2">
              <div className="bg-gray-600 rounded-lg">
                <ActivityChart />
              </div>
            </div>
            <Navigation />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid gap-4">
              <OrderTable />
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Customer's Feedback
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
                    alt="Jenny Wilson"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p>
                      <strong className="text-white">Jenny Wilson</strong>
                    </p>
                    <div>
                      ⭐⭐⭐⭐
                      <p className="text-white">
                        The food was excellent and so was the service. I had the
                        mushroom risotto with scallops which was awesome. I had
                        a burger over greens (gluten-free) which was also very
                        good. They were very conscientious about gluten
                        allergies.
                      </p>
                      <hr className="mt-4 border-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
                    alt="Dianne Russell"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p>
                      <strong className="text-white">Dianne Russell</strong>
                    </p>
                    <div>
                      ⭐⭐⭐⭐⭐
                      <p className="text-white">
                        We enjoyed the Eggs Benedict served on homemade focaccia
                        bread and hot coffee. Perfect service.
                      </p>
                      <hr className="mt-4 border-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/146/146029.png"
                    alt="Devon Lane"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p>
                      <strong className="text-white">Devon Lane</strong>
                    </p>
                    <div>
                      ⭐⭐⭐⭐
                      <p className="text-white">
                        Normally wings are wings but theirs are lean, meaty, and
                        tender.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
