import React from "react";
import renderer from "react-test-renderer";
import App from "../../Components/App";
import TradeList from "../../Components/TradeList";

it("App renders without crashing", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("App renders 1 x TradeList Component", () => {
  const component = renderer
    .create(<TradeList tradeList={mockApiResponse} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

const mockApiResponse = [
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 346,
    time: 1521734996375,
    qty: 500.0,
    price: 8641.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 345,
    time: 1521734564299,
    qty: 1200.0,
    price: 8616.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 344,
    time: 1521734562549,
    qty: 1200.0,
    price: 8615.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 343,
    time: 1521734561901,
    qty: 1200.0,
    price: 8615.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 342,
    time: 1521734561125,
    qty: 1200.0,
    price: 8614.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 341,
    time: 1521734560620,
    qty: 1200.0,
    price: 8613.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 340,
    time: 1521734558886,
    qty: 1200.0,
    price: 8613.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 339,
    time: 1521734547390,
    qty: 12000.0,
    price: 8606.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 338,
    time: 1521734530652,
    qty: 5000.0,
    price: 8603.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 337,
    time: 1521734529917,
    qty: 5000.0,
    price: 8600.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 336,
    time: 1521734524071,
    qty: 5000.0,
    price: 8593.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 335,
    time: 1521734523326,
    qty: 5000.0,
    price: 8596.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 334,
    time: 1521734522520,
    qty: 5000.0,
    price: 8598.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 333,
    time: 1521734518620,
    qty: 5000.0,
    price: 8601.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 332,
    time: 1521734467901,
    qty: 5000.0,
    price: 8605.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 331,
    time: 1521734454530,
    qty: 17000.0,
    price: 8594.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 330,
    time: 1521733468871,
    qty: 35000.0,
    price: 8565.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 329,
    time: 1521733468868,
    qty: 1500.0,
    price: 8569.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 328,
    time: 1521733468864,
    qty: 20000.0,
    price: 8590.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 327,
    time: 1521732255107,
    qty: 6000.0,
    price: 8575.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 326,
    time: 1521732065895,
    qty: 3400.0,
    price: 8591.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 325,
    time: 1521732065892,
    qty: 20000.0,
    price: 8581.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 324,
    time: 1521732065889,
    qty: 1600.0,
    price: 8576.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 323,
    time: 1521732056102,
    qty: 600.0,
    price: 8566.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 322,
    time: 1521732035572,
    qty: 4900.0,
    price: 8557.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 321,
    time: 1521732035570,
    qty: 20000.0,
    price: 8542.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 320,
    time: 1521732035566,
    qty: 100.0,
    price: 8540.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 319,
    time: 1521732008936,
    qty: 100.0,
    price: 8525.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 318,
    time: 1521731941425,
    qty: 12400.0,
    price: 8531.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 317,
    time: 1521731941422,
    qty: 100.0,
    price: 8528.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 316,
    time: 1521731770929,
    qty: 100.0,
    price: 8501.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 315,
    time: 1521731642173,
    qty: 100.0,
    price: 8516.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 314,
    time: 1521731616365,
    qty: 100.0,
    price: 8501.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 313,
    time: 1521731606438,
    qty: 100.0,
    price: 8494.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 312,
    time: 1521731596286,
    qty: 4.0,
    price: 8500.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 311,
    time: 1521731585785,
    qty: 4.0,
    price: 8502.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 310,
    time: 1521731584676,
    qty: 1500.0,
    price: 8506.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 309,
    time: 1521730801888,
    qty: 2500.0,
    price: 8486.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 308,
    time: 1521730307547,
    qty: 2500.0,
    price: 8544.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 307,
    time: 1521730294144,
    qty: 5000.0,
    price: 8544.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 306,
    time: 1521729791248,
    qty: 596.0,
    price: 8525.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 305,
    time: 1521729785875,
    qty: 4.0,
    price: 8525.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 304,
    time: 1521727934616,
    qty: 200.0,
    price: 8590.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 303,
    time: 1521727611146,
    qty: 1000.0,
    price: 8606.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 302,
    time: 1521727442320,
    qty: 10000.0,
    price: 8616.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 301,
    time: 1521727242082,
    qty: 900.0,
    price: 8608.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 300,
    time: 1521727221191,
    qty: 100.0,
    price: 8601.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 299,
    time: 1521727221187,
    qty: 900.0,
    price: 8600.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 298,
    time: 1521727070586,
    qty: 900.0,
    price: 8597.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 297,
    time: 1521726705500,
    qty: 2000.0,
    price: 8559.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 296,
    time: 1521726668327,
    qty: 1804.0,
    price: 8600.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 295,
    time: 1521726666602,
    qty: 2596.0,
    price: 8600.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 294,
    time: 1521726361488,
    qty: 99.0,
    price: 8633.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 293,
    time: 1521726353640,
    qty: 4.0,
    price: 8633.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 292,
    time: 1521726351507,
    qty: 299.0,
    price: 8633.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 291,
    time: 1521725676231,
    qty: 1300.0,
    price: 8688.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 290,
    time: 1521724280281,
    qty: 1500.0,
    price: 8692.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 289,
    time: 1521723873799,
    qty: 10000.0,
    price: 8681.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 288,
    time: 1521719956820,
    qty: 1800.0,
    price: 8644.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 287,
    time: 1521719906205,
    qty: 600.0,
    price: 8653.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 286,
    time: 1521719726264,
    qty: 300.0,
    price: 8648.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 285,
    time: 1521719721963,
    qty: 1100.0,
    price: 8651.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 284,
    time: 1521719714447,
    qty: 10000.0,
    price: 8657.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 283,
    time: 1521715612928,
    qty: 1000.0,
    price: 8727.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 282,
    time: 1521715550995,
    qty: 800.0,
    price: 8725.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 281,
    time: 1521714870551,
    qty: 19416.0,
    price: 8707.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 280,
    time: 1521714838853,
    qty: 4.0,
    price: 8687.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 279,
    time: 1521714771644,
    qty: 10000.0,
    price: 8673.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 278,
    time: 1521714054655,
    qty: 900.0,
    price: 8694.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 277,
    time: 1521713900788,
    qty: 1300.0,
    price: 8686.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 276,
    time: 1521713840311,
    qty: 10000.0,
    price: 8683.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 275,
    time: 1521713630494,
    qty: 600.0,
    price: 8701.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 274,
    time: 1521713196176,
    qty: 500.0,
    price: 8684.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 273,
    time: 1521713185518,
    qty: 500.0,
    price: 8676.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 272,
    time: 1521713086560,
    qty: 700.0,
    price: 8680.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 271,
    time: 1521713031527,
    qty: 100.0,
    price: 8721.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 270,
    time: 1521713021369,
    qty: 100.0,
    price: 8727.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 269,
    time: 1521712996910,
    qty: 19839.0,
    price: 8730.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 268,
    time: 1521712645777,
    qty: 694.0,
    price: 8774.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 267,
    time: 1521712604399,
    qty: 198.0,
    price: 8753.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 266,
    time: 1521712601532,
    qty: 297.0,
    price: 8753.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 265,
    time: 1521712599228,
    qty: 198.0,
    price: 8753.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 264,
    time: 1521712596908,
    qty: 198.0,
    price: 8753.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 263,
    time: 1521712594614,
    qty: 694.0,
    price: 8753.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 262,
    time: 1521712299334,
    qty: 600.0,
    price: 8705.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 261,
    time: 1521712220800,
    qty: 2.0,
    price: 8718.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 260,
    time: 1521712219585,
    qty: 2.0,
    price: 8718.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 259,
    time: 1521712218342,
    qty: 2.0,
    price: 8718.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 258,
    time: 1521712216332,
    qty: 2.0,
    price: 8718.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 257,
    time: 1521712214955,
    qty: 3300.0,
    price: 8705.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 256,
    time: 1521712214952,
    qty: 2700.0,
    price: 8709.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 255,
    time: 1521712214949,
    qty: 20000.0,
    price: 8722.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 254,
    time: 1521712170673,
    qty: 52200.0,
    price: 8730.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 253,
    time: 1521712170670,
    qty: 17000.0,
    price: 8736.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 252,
    time: 1521712170667,
    qty: 12500.0,
    price: 8746.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 251,
    time: 1521712170664,
    qty: 20000.0,
    price: 8765.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 250,
    time: 1521712169081,
    qty: 1336.0,
    price: 8767.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 249,
    time: 1521712164670,
    qty: 2.0,
    price: 8768.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 248,
    time: 1521712154750,
    qty: 2569.0,
    price: 8777.0
  },
  {
    feed: "trade",
    product_id: "FI_XBTUSD_180615",
    seq: 247,
    time: 1521712152559,
    qty: 102.0,
    price: 8777.0
  }
];
