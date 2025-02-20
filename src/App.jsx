import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputFirst from "./components/InputFirst";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🌍 Currency Converter</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}

        >
          {/* FROM INPUT */}
          <div className="amount-input">
            <InputFirst
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            <button
              type="button"
              className="swap-btn ms-3"
              onClick={swap}
              aria-label="Swap currencies"
            >
              🔄
            </button>
          </div>

          {/* TO INPUT */}
          <InputFirst
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          {/* CONVERT BUTTON */}
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Convert {from.toUpperCase()} ➡ {to.toUpperCase()}
          </button>

          {/* Result Display */}
          {convertedAmount > 0 && (
            <div className="result-text">
              {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
