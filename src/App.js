import { useRef } from "react";
import Input from "./Input";

import "./styles.css";

export default function App() {
  const ref = useRef();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Input ref={ref} />
      <button onClick={(ev) => console.log("App", ref)}>button</button>
    </div>
  );
}
