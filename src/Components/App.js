import React, { Component } from "react";
import TradeList from "./TradeList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradeList: []
    };
  }

  componentDidMount() {
    this.ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1");

    this.ws.onopen = () => {
      console.log("coonnection open ");
      this.ws.send(
        JSON.stringify({
          event: "subscribe",
          feed: "trade",
          product_ids: ["FI_XBTUSD_180615"]
        })
      );
    };

    this.ws.onmessage = e => {
      let newData = JSON.parse(e.data);
      if (newData.trades) {
        this.setState({
          tradeList: [...this.state.tradeList, ...newData.trades]
        });
      }
    };

    this.ws.onerror = err => {
      console.log("There was an error connecting to the WebSocket", err);
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }
  render() {
    return <TradeList tradeList={this.state.tradeList} />;
  }
}
