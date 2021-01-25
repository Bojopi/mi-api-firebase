const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/firechart", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

const db = admin.firestore();
const webApi = functions.https.onRequest(main);
export default webApi;

const Product = class {
  constructor(productName, productPrice) {
    this.productName = productName;
    this.productPrice =productPrice;
  }
};

app.post("/saveProduct", async (req, res) => {
  const product = new Product("Bag", "1000");
  // productName: "Bag",
  // productPrice: "1000"
  // }

  await db.collection("productOnSale").add(product);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
