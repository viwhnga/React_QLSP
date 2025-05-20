import React, { useState } from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Thay thế useNavigate

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();

    const usernameTrimmed = username.trim();
    const passwordTrimmed = password.trim();

    try {
      const res = await fetch('http://localhost:3000/user');
      const data = await res.json();

      const user = data.find(user =>
        user.username === usernameTrimmed &&
        user.password === passwordTrimmed
      );

      if (user) {
        localStorage.setItem('username', usernameTrimmed);
        localStorage.setItem('role', user.role || 'user');
        toast.success("Đăng nhập thành công!");

        if (user.role === 'admin') {
          history.push('/product-list'); // Điều hướng admin
        } else {
          history.push('/'); // Điều hướng user
        }
      } else {
        toast.error("Sai tên đăng nhập hoặc mật khẩu!");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      toast.error("Lỗi kết nối tới server!");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <div className="container">
        <div id="content">
          <form onSubmit={onLogin} className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h4>Đăng nhập</h4>
                <div className="space20">&nbsp;</div>
                <div className="form-block">
                  <label htmlFor="username">UserName*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <label htmlFor="password">Password*</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </div>
              <div className="col-sm-3" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
