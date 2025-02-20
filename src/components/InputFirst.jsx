import React, { useId } from "react";

const InputFirst = ({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId();

  return (
    <div className={`container mt-3 ${className}`}>
      <div className="mb-3">
        <label htmlFor={amountInputId} className="form-label">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="form-control"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Select Currency</label>
        <select
          className="form-select"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputFirst;
