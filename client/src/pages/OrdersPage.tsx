import React from 'react';

type OrdersProps = {
  token: string;
}

const OrdersPage = ({ token }: OrdersProps) => {

  return (
    <div className='App-header'>
      <div>
        <h2>Orders Page</h2>
        {}
      </div>
    </div>
  );
};

export default OrdersPage;
