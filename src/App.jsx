import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CardHolder from "./Components/cardHolder";

function App() {
  const [amount, setAmount] = useState("0");
  const [currency, setCurrency] = useState("usd");
  const [data, setData] = useState({});
  const [to, setTo] = useState("inr");

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  const options = Object.keys(data);

  return (
    <>
      <div className="relative h-screen w-full flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1622630732303-8e94514a1746?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          className="object-cover object-center w-full h-full absolute inset-0"
        />
        <CardHolder
          amount={amount}
          currency={currency}
          amountChange={(amount) => setAmount(amount)}
          currencyChange={(currency) => setCurrency(currency)}
          convertTo={(convert) => setTo(convert)}
          options={options}
          to={to}
          data={data}
        />
      </div>
    </>
  );
}

export default App;
