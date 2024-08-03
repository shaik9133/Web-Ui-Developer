import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '5', value: 3000 },
  { name: '9', value: 4000 },
  { name: '11', value: 2000 },
  { name: '13', value: 2780 },
  { name: '15', value: 1890 },
  { name: '17', value: 2390 },
  { name: '19', value: 3490 },
  { name: '21', value: 14900 },
  { name: '23', value: 3908 },
  { name: '25', value: 4800 },
  { name: '27', value: 3490 },
];

const ActivityChart = () => {
  return (
    <div className="flex flex-col bg-gray-900 p-5 rounded-lg w-full max-w-8xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Activity</h2>
        <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded">
          Weekly
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#333',
              borderColor: '#444',
              color: '#fff',
            }}
          />
          <Bar dataKey="value" fill="#6495ED" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
