import React from 'react';
import momo from "../assets/images/payments/momo200x200.jpg";

const Checkout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trang Đặt Hàng</h1>
      <p>Sản phẩm: Dầu gội</p>
      <p>Số tiền: 1,000</p>
      <p>Phương thức thanh toán</p>
      <img
        src={momo}
        className=""
        alt="Another Image zoom-on-hover effect"
        height={40}
        width={40}
      />
    </div>
  );
};

export default Checkout;