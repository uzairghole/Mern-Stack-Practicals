import { useState } from "react"

function App() {
  const num1 = 15;
  const num2 = 25;
  function add(a, b){
    return a + b;
  }
    return (
      <>
        <div>
          <h2>Sum of Two Numbers</h2>
          <p>First Number : {num1}</p>
          <p>Second Number : {num2}</p>
          <h3>sum = {add(num1, num2)}</h3>
        </div>
      </>
    )
}

export default App