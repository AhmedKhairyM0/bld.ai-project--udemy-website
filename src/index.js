import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// {
//   _id: '{{objectId()}}',
//   index: '{{index()}}',
//   guid: '{{guid()}}',
//   isActive: '{{bool()}}',
//   balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
//   picture: 'http://placehold.it/32x32',
//   age: '{{integer(20, 40)}}',
//   eyeColor: '{{random("blue", "brown", "green")}}',
//   name: '{{firstName()}} {{surname()}}',
//   gender: '{{gender()}}',
//   company: '{{company().toUpperCase()}}',
//   email: '{{email()}}',
//   phone: '+1 {{phone()}}',
//   address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
//   about: '{{lorem(1, "paragraphs")}}',
//   registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
//   latitude: '{{floating(-90.000001, 90)}}',
//   longitude: '{{floating(-180.000001, 180)}}',
//   tags: [
//     '{{repeat(7)}}',
//     '{{lorem(1, "words")}}'
//   ],
//   friends: [
//     '{{repeat(3)}}',
//     {
//       id: '{{index()}}',
//       name: '{{firstName()}} {{surname()}}'
//     }
//   ],
//   greeting: function (tags) {
//     return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
//   },
//   favoriteFruit: function (tags) {
//     var fruits = ['apple', 'banana', 'strawberry'];
//     return fruits[tags.integer(0, fruits.length - 1)];
//   }
// },