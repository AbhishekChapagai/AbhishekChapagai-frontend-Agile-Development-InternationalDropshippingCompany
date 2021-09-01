import myKey from "./khaltiKey";
import axios from "axios";
let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  // productIdentity: "0000",
  // productName: "Dhuwani",
  // productUrl: "http://localhost:3000/",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
        paymentmethod: "khalti",
        userid: localStorage.getItem("userid"),
      };

      let config = {
        headers: { 'Authorization': 'Key test_secret_key_f59e8b7d18b4499ca40f68195a846e9b' }
      };

      axios
        .post(
          `http://localhost:90/mycheckout/insert/`, data, config
        )
        .then((response) => {
          console.log(response.data);
          alert("Checkout successfull, thank you!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
