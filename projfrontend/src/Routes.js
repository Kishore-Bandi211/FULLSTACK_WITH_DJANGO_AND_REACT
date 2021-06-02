import React from "react"
import {BrowserRouter , Switch,Route} from "react-router-dom" 
import PrivateRoutes from "./auth/helper/PrivateRoutes";

import Home from "./core/Home"
import Signin from "./user/Signin";
import Signup from "./user/Signup"
import UserDashboard from "./user/UserDashboard";

const Routes = () => {
    return (
    <BrowserRouter>

    <Switch>
        <Route  exact path = "/" component = {Home} />
                <Route  exact path = "/signup" component = {Signup} />
                <Route  exact path = "/signin" component = {Signin} />

        <PrivateRoutes path = "/user/dashboard" exact component={UserDashboard} />

        
    </Switch>
    </BrowserRouter>

    );

};

export default Routes;