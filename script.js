

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(to bottom, #e8f5e9, #fff8e1);
  color: #2e2e2e;
}

/* Header */
header {
  background: #2e7d32;
  color: white;
  text-align: center;
  padding: 20px;
}

header h1 {
  font-size: 1.8rem;
}

/* Navegação */
nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  background: #a5d6a7;
  padding: 10px;
}

nav button {
  background: #33691e;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
}

nav button:hover {
  background: #558b2f;
}

/* Conteúdo */
main {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.secao {
  display: none;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.secao.ativa {
  display: block;
}

button {
  margin-top: 10px;
  padding: 10px;
  border: none;
  background: #f9a825;
  cursor: pointer;
  border-radius: 8px;
}

button:hover {
  background: #f57f17;
}

/* Footer */
footer {
  text-align: center;
  padding: 15px;
  background: #2e7d32;
  color: white;
  margin-top: 20px;
}
