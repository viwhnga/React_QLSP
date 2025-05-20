import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = ({ match }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (match) {
      const id = match.params.id;
      axios({
        method: 'GET',
        url: `http://localhost:3000/contacts/${id}`,
        data: null
      }).then(res => {
        const data = res.data;
        setId(data.id);
        setStatus(data.status);
      }).catch(err => {
        // Handle error
      });
    }
  }, [match]);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === 'status') {
      setStatus(value);
    }
  };

  const onSave = (event) => {
    event.preventDefault();
    // You can handle form submission here
    // Example: save the data to the API
    toast.success('Saved successfully!');
  };

  return (
    <React.Fragment>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <form onSubmit={onSave} className="contact-form">
                <select 
                  className="form-control sl" 
                  name="status" 
                  value={status} 
                  onChange={onChange} 
                  required
                >
                  <option value={true}>Xác nhận</option>
                  <option value={false}>Chưa xác nhận</option>
                </select>
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Add;
