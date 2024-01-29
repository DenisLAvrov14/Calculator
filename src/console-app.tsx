import React, { FC, useCallback } from "react";
import { useState } from "react";

// необходимо реализовать калькулятор с операциями: +, -, *, /
// результат необходимо вывести в консоль или на UI

export const ConsoleApp: FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [result, setResult] = useState<number>();

  const eventSetA = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseFloat(event.target.value))
  }, [setA])

  const eventSetB = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseFloat(event.target.value))
  }, [setB])

  const calculateAdd = () => {
    const resultAdd = a + b;
    return setResult(resultAdd)
  };

  const calculateSub = () => {
    const resultSub = a - b;
    return setResult(resultSub)
  };

  const calculateMult = () => {
    const resultMult = a * b;
    return setResult(resultMult)
  };

  const calculateDiv = () => {
    const resultDiv = a / b;
    return setResult(resultDiv)
  };

  return (
    <div>
      <input onChange={eventSetA} placeholder="Give me A"></input>
      <input onChange={eventSetB} placeholder="Give me B"></input>
      <div className="Buttons">
        <button onClick={calculateAdd}>Addition</button>
        <button onClick={calculateSub}>Subtraction</button>
        <button onClick={calculateMult}>Multiplication</button>
        <button onClick={calculateDiv}>Division</button>
      </div>
      <div>result: {result}</div>
      {/* <button>calculate</button> */}
    </div>
  )
};

export default ConsoleApp