"use strict";
import React, { Component } from "react";

import TradeList from "./TradeList";
import WebSocket from "ws";
// import SockJS from "sockjs-client";
// import io from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);

    // const sock = new SockJS("https://www.cryptofacilities.com/ws/v1");
    // sock.onopen = () => {
    //   console.log("coonnection open");
    // };
    //
    // sock.onmessage = e => {
    //   console.log("message received", e.data);
    //   // return store.dispatch(actions.receive(e.data));
    // };
    //
    // sock.onclose = () => {
    //   console.log("close");
    // };
    this.state = {
      tradeList: []
    };
  }

  componentDidMount() {
    this.ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1");

    this.ws.onopen = () => {
      console.log("coonnection open");
      this.ws.send(
        JSON.stringify({
          event: "subscribe",
          feed: "trade",
          product_ids: ["FI_XBTUSD_180615"]
        })
      );
    };

    this.ws.onmessage = e => {
      console.log("message received", e.data);
      // this.setState({ tradeList: [...this.state.tradeList, e.data] });
    };

    this.ws.onerror = err => {
      console.log("Fluffy error", err);
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }
  render() {
    return <TradeList tradeList={this.state.tradeList} />;
  }
}

export default App;
