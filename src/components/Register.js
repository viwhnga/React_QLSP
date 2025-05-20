import React, { useState } from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    c_password: ''
  });

  const [registered, setRegistered] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const onRegister = (e) => {
    e.preventDefault();
    const { email, name, password, c_password } = form;

    if (!email || !name || !password || !c_password) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (password !== c_password) {
      toast.error("Mật khẩu không trùng khớp!");
      return;
    }

    // Giả lập đăng ký thành công
    setRegistered(true);
    toast.success("Đăng ký thành công!");
  };

  if (registered) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div id="content">
          <form onSubmit={onRegister} className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h4>Đăng ký</h4>
                <div className="space20">&nbsp;</div>

                <div className="form-block">
                  <label htmlFor="email">Email address*</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="form-block">
                  <label htmlFor="name">Fullname*</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="form-block">
                  <label htmlFor="password">Password*</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={form.password}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="form-block">
                  <label htmlFor="c_password">Re-password*</label>
                  <input
                    type="password"
                    name="c_password"
                    className="form-control"
                    value={form.c_password}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Register</button>
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

export default Register;
