import React from 'react';

const OrderTable = () => {
  const orders = [
    {
      customer: 'Wade Warren',
      orderNo: '15478256',
      amount: '$124.00',
      status: 'Delivered',
      image:
        'https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vYzZjMDlhMjgtNTA2OS00OWRkLWE0YmQtZWE2MDgzZTZhNmMyLmpwZWc.webp',
    },
    {
      customer: 'Jane Cooper',
      orderNo: '48965786',
      amount: '$365.02',
      status: 'Delivered',
      image:
        'https://images.vogue.it/users/media/m/manioana_ro.png?v=1547397246',
    },
    {
      customer: 'Guy Hawkins',
      orderNo: '78058215',
      amount: '$45.88',
      status: 'Cancelled',
      image:
        'https://s.cafebazaar.ir/images/icons/draw.chainsaw.man-3d896049-33ed-4ff5-b871-4844cc87fe23_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize',
    },
    {
      customer: 'Kristin Watson',
      orderNo: '20065732',
      amount: '$585.00',
      status: 'Pending',
      image:
        'https://cdn.openart.ai/published/LFhbGppesRni1QDXf56E/7_Lc5qbX_ysds_256.webp',
    },
    {
      customer: 'Cody Fisher',
      orderNo: '95715620',
      amount: '$545.00',
      status: 'Delivered',
      image:
        'https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vODRlOTE2ZGItZjkzOC00YjVkLWE5YmYtOGY4YTMyMzlkNWI3LmpwZWc.webp',
    },
    {
      customer: 'Savannah Nguyen',
      orderNo: '70514568',
      amount: '$128.20',
      status: 'Delivered',
      image:
        'https://s.cafebazaar.ir/images/icons/cute.girly.dps-8aeef29f-417a-4459-94e4-e3107ff62e18_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize',
    },
  ];

  const statusClasses = {
    Delivered: 'bg-green-500 text-green-200',
    Cancelled: 'bg-red-500 text-red-200',
    Pending: 'bg-red-500 text-red-200',
  };

  return (
    <div className="">
      <div className="bg-gray-800 text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2">Customer</th>
              <th className="p-2">Order No.</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="p-2 flex items-center">
                  <img
                    src={order.image}
                    alt={`${order.customer} product`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {order.customer}
                </td>
                <td className="p-2">{order.orderNo}</td>
                <td className="p-2">{order.amount}</td>
                <td
                  className={`rounded-full p-2 w-20 flex justify-center ${
                    statusClasses[order.status]
                  } text-xs`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
