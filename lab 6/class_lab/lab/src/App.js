import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRouter from "./routing/PublicRouter";
import PrivateRouter from "./routing/PrivateRouter";
import Main from "./containers/Main/";
import UserList from "./containers/UserList/UserList";
import FriendList from "./containers/FriendList/FriendList";
import Auth from "./containers/Auth/Auth";
import Profile from "./containers/Profile/";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter exact path="/" component={Main} />
        <PublicRouter exact path="/users" component={UserList} />
        <PublicRouter path="/friends" component={FriendList} />
        <PublicRouter path="/sign-in" component={Auth} />
        <PrivateRouter path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
