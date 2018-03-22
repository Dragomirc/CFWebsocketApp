import React, { Component } from "react";
import TradeList from "./TradeList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradeList: []
    };
    this.timeoutID = 0;
    this.ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1");
  }

  componentDidMount() {
    this.ws.onopen = () => {
      // console.log("coonnection open ");
      this.ws.send(
        JSON.stringify({
          event: "subscribe",
          feed: "trade",
          product_ids: ["FI_XBTUSD_180615"]
        })
      );
    };

    this.ws.onmessage = e => {
      console.log(e.data);
      let newData = JSON.parse(e.data);
      if (newData.trades) {
        this.setState({
          tradeList: [...this.state.tradeList, ...newData.trades]
        });
      }

      if (newData.price) {
        this.setState({
          tradeList: [newData, ...this.state.tradeList]
        });
      }
    };

    this.ws.onerror = err => {
      console.log("There was an error connecting to the WebSocket", err);
    };

    this.ws.onclose = e => {
      console.log("closed reason", e);
      if (e.code === 1006) {
        console.log("The socket was cl0sed abnormaly");
      }
    };
  }

  componentWillUnmount() {
    this.ws.close(e => {
      console.log("closed");
    });
  }
  render() {
    return <TradeList tradeList={this.state.tradeList} />;
  }
}
