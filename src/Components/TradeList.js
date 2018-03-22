import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import _ from "lodash";

export default class TradeList extends Component {
  renderTrades = ({ product_id, qty, price }) => {
    return (
      <tr key={v4()}>
        <td>{product_id}</td>
        <td>{qty}</td>
        <td>{price}</td>
      </tr>
    );
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {_.orderBy(this.props.tradeList, ["time"], ["desc"]).map(
            this.renderTrades
          )}
        </tbody>
      </table>
    );
  }
}

TradeList.propsTypes = {
  tradeList: PropTypes.array
};
