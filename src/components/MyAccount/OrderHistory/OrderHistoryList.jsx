import React from 'react';

const OrderHistoryList = () => {
  const orders = [
    {
      id: 1,
      date: '2023-06-25',
      total: 49.99,
      items: [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
      ],
    },
    // Add more order objects here
  ];

  return (
    <div className="container">
      <div className="card order-history-card">
        <h5 className='mt30 mb30'>Here are the orders you've placed since your account was created:</h5>
      </div>
      <div className="table-responsive">
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} (${item.price.toFixed(2)})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistoryList;
