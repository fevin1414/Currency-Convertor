import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1622630732303-8e94514a1746?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </>
  );
}

export default App;
