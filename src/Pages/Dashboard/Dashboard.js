import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ManageOrder from './ManageOrder';
import Payment from './Payment';
import SettingPage from './SettingPage';
import useAuth from '../../Hooks/useAuth'
import NotAdmin from './NotAdmin';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {isAdmin} = useAuth()
  return (
    <div>
          <div className="w-50 mx-auto">
            <div className="row navbar text-center">
                <div className="col-md-3"><Link to={`${url}/manageorder`} className="btn text-secondary">Manage Order</Link></div>
                <div className="col-md-3"><Link to={`${url}/payment`} className="btn text-secondary">Payment</Link></div>
                <div className="col-md-3"><Link to={`${url}/setting`} className="btn text-secondary">Settings</Link></div>

                {isAdmin && <div className="col-md-3"><Link to='/admin' className="btn text-secondary">Admin</Link></div>}
                {!isAdmin && <div className="col-md-3"><Link to={`${url}/admin`} className="btn text-secondary">Admin</Link></div>}
            </div>
        </div>
      <Switch>
        <Route exact path={`${path}`}>
            <ManageOrder />
        </Route>
        <Route exact path={`${path}/manageorder`}>
            <ManageOrder />
        </Route>
        <Route path={`${path}/payment`}>
            <Payment />
        </Route>
        <Route path={`${path}/setting`}>
            <SettingPage />
        </Route>
        <Route path={`${path}/admin`}>
            <NotAdmin />
        </Route>
    </Switch>
    </div>
  );
};

export default Dashboard;