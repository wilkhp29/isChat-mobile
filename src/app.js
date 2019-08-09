import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import Router from "./router";
import io from "./config/socket.io";

io(store);


export default () => {
    return(
    <Provider store={store}>
        <Router/>
    </Provider>
    );
}