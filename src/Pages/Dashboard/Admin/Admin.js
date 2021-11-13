import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import AddProduct from './AddProduct';
import AdminDashboard from './AdminDashboard';
import MakeAdmin from './MakeAdmin';
import User from './Users';


const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
          <div className="w-50 mx-auto">
            <div className="row navbar text-center">
                <div className="col-md-4"><Link to={`${url}/dashboard`} className="btn text-secondary">Dashboard</Link></div>
                <div className="col-md-4"><Link to={`${url}/addproduct`} className="btn text-secondary">Add Product</Link></div>
                <div className="col-md-4"><Link to={`${url}/makeadmin`} className="btn text-secondary">Make Admin</Link></div>
                {/* <div className="col-md-3"><Link to={`${url}/users`} className="btn text-secondary">Users</Link></div> */}
            </div>
        </div>
      <Switch>
        <Route exact path={`${path}`}>
            <AdminDashboard />
        </Route>
        <Route path={`${path}/dashboard`}>
            <AdminDashboard />
        </Route>
        <Route path={`${path}/addproduct`}>
            <AddProduct />
        </Route>
        <Route path={`${path}/makeadmin`}>
            <MakeAdmin />
        </Route>
        {/* <Route path={`${path}/users`}>
            <User />
        </Route> */}
    </Switch>
    </div>
  );
};

export default Admin;