import React from "react";
import axios from "axios";
// host for dev version
const host = "http://localhost:4200";
const token = "none";
export class APIService {
  get = url => {
    return callAPI(url, "GET");
  };
  deleteMethod(url) {
    return callAPI(url, "DELETE");
  }
  put(url, data) {
    return callAPI(url, "PUT");
  }
  post(url, data = {}) {
    const sampleData = {
      sku: 1,
      title: "new",
      description: "4 MSL",
      availableSizes: ["Science fiction", "Drama"],
      style: "",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    };
    return callAPI(url, "post", sampleData);
  }
}
function callAPI(url, method, data = {}) {
  return axios({
    method: method,
    url: `${host}/${url}`,
    data: data,
    headers: { Authorization: `Bearer ${token}` }
  }).catch(err => {
    console.log(err);
  });
}
// export function get(url) {
//   return callAPI(url, "GET");
// }
// export function deleteMethod(url) {
//   return callAPI(url, "DELETE");
// }
// export function put(url, data) {
//   return callAPI(url, "PUT");
// }
// export function post(url, data = {}) {
//   const sampleData = {
//     sku: 1,
//     title: "new",
//     description: "4 MSL",
//     availableSizes: ["Science fiction", "Drama"],
//     style: "",
//     price: 10.9,
//     installments: 9,
//     currencyId: "USD",
//     currencyFormat: "$",
//     isFreeShipping: true
//   };
//   return callAPI(url, "post", sampleData);
// }

// function callAPI(url, method, data = {}) {
//   return axios({
//     method: method,
//     url: `${host}/${url}`,
//     data: data,
//     headers: { Authorization: `Bearer ${token}` }
//   }).catch(err => {
//     console.log(err);
//   });
// }
