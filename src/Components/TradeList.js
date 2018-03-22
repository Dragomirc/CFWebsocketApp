import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

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
        <tbody>{this.props.tradeList.map(this.renderTrades)}</tbody>
      </table>
    );
  }
}

TradeList.propsTypes = {
  tradeList: PropTypes.array
};
