import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = (props) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    color: '',
    name_category: '',
    material: '',
    expiry_date: '',
    origin: '',
    description: '',
    tinhtranghang: true,
  });

  useEffect(() => {
    const { match } = props;
    if (match) {
      const id = match.params.id;
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        data: null,
      })
        .then((res) => {
          const data = res.data;
          setProduct({
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            color: data.color,
            name_category: data.name_category,
            material: data.material,
            expiry_date: data.expiry_date,
            origin: data.origin,
            description: data.description,
            tinhtranghang: data.tinhtranghang,
          });
        })
        .catch((err) => {});
    }
  }, [props]);

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const type = target.type;
    let value = target.value;
    if (name === 'tinhtranghang') {
      value = target.value === 'true' ? true : false;
    }
    if (type === 'file') {
      value = target.value.replace(/C:\\fakepath\\/i, '/images/');
    }

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    const { id, name, price, image, name_category, color, material, expiry_date, origin, description, tinhtranghang } = product;
    const { history } = props;
    if (id) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        data: {
          name,
          price,
          image,
          color,
          name_category,
          material,
          expiry_date,
          origin,
          description,
          tinhtranghang,
        },
      }).then((res) => {
        toast.success('Cập nhật sản phẩm thành công', {});
        history.goBack();
      });
    } else {
      if (name === '' && price === '' && image === '' && material === '' && expiry_date === '') {
        toast.warn('Vui lòng nhập đủ nội dung', {});
      } else {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/products',
          data: {
            name,
            price,
            image,
            color,
            name_category,
            material,
            expiry_date,
            origin,
            description,
            tinhtranghang,
          },
        }).then((res) => {
          toast.success('Thêm sản phẩm thành công', {});
          history.goBack();
        });
      }
    }
  };

  const onClear = () => {
    setProduct({
      name: '',
      price: '',
      image: '',
      color: '',
      name_category: '',
      material: '',
      expiry_date: '',
      origin: '',
      description: '',
      tinhtranghang: true,
    });
  };

  return (
    <React.Fragment>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <div className="panel panel-warning col-md-8 ml">
                <div className="container">
                  <div className="panel-body mt-4">
                    <form onSubmit={onSave}>
                      <div className="form-group">
                        <label>Tên Sản phẩm :</label>
                        <input type="text" name="name" value={product.name} onChange={onChange} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Giá Sản phẩm ($) :</label>
                        <input type="number" name="price" value={product.price} onChange={onChange} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Chọn Ảnh :</label>
                        <input type="file" name="image" onChange={onChange} className="form-control" />
                      </div>
                      <label>Loại sản phẩm:</label>
                      <select className="form-control" name="name_category" value={product.name_category} onChange={onChange} required="required">
                        <option value="sản phẩm mới">mới</option>
                        <option value="sản phẩm hot">hot</option>
                        <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                      </select>
                      <div className="form-group">
                        <label>Màu bánh :</label>
                        <input type="text" name="color" value={product.color} onChange={onChange} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Nguyên liệu :</label>
                        <input type="text" name="material" value={product.material} onChange={onChange} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Hạn sử dụng :</label>
                        <input type="date" name="expiry_date" value={product.expiry_date} onChange={onChange} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Xuất xứ :</label>
                        <input type="text" name="origin" value={product.origin} onChange={onChange} className="form-control" />
                      </div>
                      <label>Tình trạng hàng :</label>
                      <select className="form-control" name="tinhtranghang" value={product.tinhtranghang} onChange={onChange} required="required">
                        <option value={true}>Còn hàng</option>
                        <option value={false}>Hết hàng</option>
                      </select>
                      <div className="form-group">
                        <label>Mô tả :</label>
                        <input type="text" name="description" value={product.description} onChange={onChange} className="form-control" />
                      </div>
                      <br />
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Lưu
                        </button>
                        &nbsp;
                        <button type="button" onClick={onClear} className="btn btn-primary">
                          Clear
                        </button>
                        <NavLink to="/product-list" className="btn btn-primary ml-1">
                          Trở về
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Add;
