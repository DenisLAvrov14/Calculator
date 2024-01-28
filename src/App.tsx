import React, {
  ReactNode,
  useMemo,
  useState,
  FC,
  ButtonHTMLAttributes,
  useCallback,
  MouseEventHandler,
  MouseEvent,
  useEffect,
  forwardRef,
  useRef,
  Ref,
  MutableRefObject,
} from "react";
import { ConsoleApp } from "./console-app";
import './App.css';

function App() {
  return (
    <div className="App">
      <ConsoleApp/>
    </div>
  );
}

export default App;
