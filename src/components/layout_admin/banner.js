import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = () => {
  const Logout = () => {
    localStorage.clear();
    toast.success("Đăng xuất thành công");
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars" />
      </button>
      {/* Topbar Search */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm" />
            </button>
          </div>
        </div>
      </form>
      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw" />
          </a>
          {/* Dropdown - Messages */}
          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        {/* Nav Item - Alerts */}
        <li className="nav-item dropdown no-arrow mx-1">
          <div className="btn-group mt-2 float-left">
            <NavLink className="navbar-brand" onClick={Logout} to="/login">
              <button type="button" className="btn btn-danger">Đăng Xuất</button>
            </NavLink>
          </div>
        </li>
        <div className="topbar-divider d-none d-sm-block" />
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Phan Văn Thông</span>
            <img className="img-profile rounded-circle" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/37749370_1890435077922841_3688431438933262336_n.jpg?_nc_cat=108&_nc_eui2=AeGXJduDDq0XB_oclIPDiwqzY7DFr7GNO9UItFhJ4RuBJG_3DifKnzqsjiXGbDqTbKcDbDwExhffiP_t1atq4WgL5Kg8o705cvMO5cHY65Jgpw&_nc_oc=AQluRPKSWzHyOYcORZSMspYrsYq4uQwdty2aDnzQLaKgdd3OTOiSlH4drcqVxKQCfXA&_nc_ht=scontent.fsgn2-3.fna&oh=e14dab77a288358738395ad14d629a14&oe=5E53E5A3" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Banner;
