import { useEffect, useState } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates)) 
      .catch((err) => console.error("API Error:", err)); 
  }, [currency]);

  return data;
}

export default useCurrency;
