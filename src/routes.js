import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team";
import Contact from "./pages/contact"
import Support from "./pages/support";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/team" component={Team} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/support" component={Support} exact/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
