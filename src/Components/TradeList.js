import React, { Component } from "react";

export default class TradeList extends Component {
  renderTrades = ({ product_id, qty, price }) => (
    <tr>
      <td>{product_id}</td>
      <td>{qty}</td>
      <td>{price}</td>
    </tr>
  );
  render() {
    return (
      <table>
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
