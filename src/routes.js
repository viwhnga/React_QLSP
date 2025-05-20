import React from 'react';
import Login from './components/Login.js';
import AllProduct from './components/AllProduct.js';
import ProductList from './components/ProductList.js';
import ProductDetail from './components/ProductDetail.js';
import Add from './components/Add.js';
import Contact from './components/Contact.js';
import ContactList from './components/ContactList.js';
import Confirm from './components/Confirm.js';
import Introduce from './components/Introduce.js';
import SanPhamMoi from './components/SanPhamMoi.js';
import SanPhamHot from './components/SanPhamHot.js';
import SanPhamKhuyenMai from './components/SanPhamKhuyenMai.js';
import ProDetailAdmin from './components/ProDetailAdmin.js';
import NotFound from './components/NotFound.js';
import ContactDetail from './components/ContactDetail.js';
import Register from './components/Register.js';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <AllProduct />
  },
  {
    path: '/login',
    exact: true,
    main: () => <Login />
  },
  {
    path: '/product-list',
    exact: true,
    main: () => <ProductList />
  },
  {
    path: '/contact-list',
    exact: true,
    main: () => <ContactList />
  },
  {
    path: '/contacts/:id/contactdetail',
    exact: true,
    main: ({ match }) => <ContactDetail match={match} />
  },
  {
    path: '/products/:id/productdetail',
    exact: true,
    main: ({ match }) => <ProductDetail match={match} />
  },
  {
    path: '/add',
    exact: true,
    main: () => <Add />
  },
  {
    path: '/products/:id/edit',
    exact: true,
    main: ({ match }) => <Add match={match} />
  },
  {
    path: '/contacts/:id/confirm',
    exact: true,
    main: ({ match }) => <Confirm match={match} />
  },
  {
    path: '/contact',
    exact: true,
    main: () => <Contact />
  },
  {
    path: '/introduce',
    exact: true,
    main: () => <Introduce />
  },
  {
    path: '/sanphamhot',
    exact: true,
    main: () => <SanPhamHot />
  },
  {
    path: '/sanphamkhuyenmai',
    exact: true,
    main: () => <SanPhamKhuyenMai />
  },
  {
    path: '/sanphammoi',
    exact: true,
    main: () => <SanPhamMoi />
  },
  {
    path: '/products/:id/prodetailadmin',
    exact: true,
    main: ({ match }) => <ProDetailAdmin match={match} />
  },
  {
	path: '/register',
	exact: true,
	main: () => <Register />
  },
  
  {
    path: '*',
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
