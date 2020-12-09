import React from "react"
import { Route, HashRouter, Switch } from "react-router-dom"

import App from "../pages/App.jsx"
import Home from "../pages/Home"

export default class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App path="/">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        {/* <Route path="*" component={NotFound}></Route> */}
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}