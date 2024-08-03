import React from 'react';
import { Card, DonutChart } from '@tremor/react';

const data = [
  {
    name: '1',
    amount: 170,
    share: '32.1%',
    color: 'bg-cyan-500',
  },
  {
    name: '2',
    amount: 100,
    share: '19.6%',
    color: 'bg-blue-500',
  },
];

const percentageFormatter = (value) => `${value}%`;

export default function Dontchart() {
  return (
    <>
      <Card className="">
        {' '}
        <DonutChart
          className=""
          data={data}
          category="amount"
          index="name"
          valueFormatter={percentageFormatter}
        />
        <p className="text-center mt-2">
          *The values here have been rounded off.
        </p>
      </Card>
    </>
  );
}
