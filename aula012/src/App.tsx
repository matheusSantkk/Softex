import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [saudacao, setSaudacao] = useState("");

  function handleSaudar() {
    setSaudacao(`Olá, ${nome}!`);
  }

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome..."
      />

      <button onClick={handleSaudar}>Saudar</button>

      <div>{saudacao}</div>
    </div>
  );
}

export default App;
