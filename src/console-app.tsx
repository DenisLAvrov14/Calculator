import React, { FC, useCallback } from "react";
import { useState } from "react";

// необходимо реализовать калькулятор с операциями: +, -, *, /
// результат необходимо вывести в консоль или на UI

export const ConsoleApp: FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [result, setResult] = useState<number>();

  const handleSetA = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseFloat(event.target.value))
  }, [setA])

  const handleSetB = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseFloat(event.target.value))
  }, [setB])

  const handleAdd = useCallback(() => {
    setResult(a + b);
  }, [a, b]);

  const handleSub = useCallback(() => {
    setResult(a - b)
  }, [a, b])

  const handleMult = useCallback(() => {
    setResult(a * b)
  }, [a, b])

  const handleDev = useCallback(() => {
    setResult(a / b)
  }, [a, b])

  return (
    <div>
      <input onChange={handleSetA} placeholder="Give me A"></input>
      <input onChange={handleSetB} placeholder="Give me B"></input>
      <div className="Buttons">
        <button onClick={handleAdd}>Addition</button>
        <button onClick={handleSub}>Subtraction</button>
        <button onClick={handleMult}>Multiplication</button>
        <button onClick={handleDev}>Division</button>
      </div>
      <div>result: {result}</div>
      {/* <button>calculate</button> */}
    </div>
  )
};

export default ConsoleApp