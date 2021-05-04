import React, { Component } from "react";
import { BrowserRouter, Switch ,Route} from "react-router-dom";
import history from "./history";
import SideNavbar from "../components/sideNavbar";
import TopNavbar from "../components/TopNavbar";
import Contents from "../components/contents";
import Ajith from "../components/actors/ajith";
class Router extends Component{
    render(){ 
        return(
            <BrowserRouter history={history}>
                <Switch>
                <Route path="/" component={SideNavbar} exact />
                <Route path="/appBar" component={TopNavbar} exact/>
                <Route path="/content" component={Contents} exact/>
                <Route path="/ajith" component={Ajith} exact/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;