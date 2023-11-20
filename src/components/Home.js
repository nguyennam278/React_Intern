import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h2 style={{ textAlign: "center" }}>Khái quát ứng dụng</h2>
      <h4>Ứng dụng quản lí Users</h4>
      <p>API sử dụng: https://reqres.in/</p>
      <p>Sử dụng thư viên React </p>
      <p>Gồm các chức năng sau: </p>
      <div className="Tasks">
        <ul>
          <li>1. Đăng nhập</li>
          <li>2. Thêm User</li>
          <li>3. Sửa User</li>
          <li>4. Xoá User</li>
          <li>5. Hiển thị User</li>
          <li>6. Sắp xếp User theo First Name</li>
          <li>7. Tìm kiếm User theo email</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
