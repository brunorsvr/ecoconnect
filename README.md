# EcoConnect - Energia Solar ☀️

Projeto de site institucional minimalista para empresa de energia solar, feito para a matéria UPX III.

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (recomendado versão 18.x ou superior)
- [npm](https://www.npmjs.com/) (vem junto com o Node)
  - ou, se preferir, [Yarn](https://yarnpkg.com/)

Para verificar se já tem:

```bash
node -v
npm -v
```

Se quiser usar Yarn:

```bash
npm install -g yarn
```

---

## 🛠️ Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📦 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/brunorsvr/ecoconnect.git
cd ecoconnect
```

### 2. Instale as dependências

```bash
npm install
```
ou
```bash
yarn install
```

### 3. Rode o projeto localmente

```bash
npm run dev
```
ou
```bash
yarn dev
```

Acesse:
```
http://localhost:5173/
```

---

## 📋 Estrutura principal

```
src/
 ├── components/
 │    ├── Button.jsx
 │    ├── Header.jsx
 │    ├── Hero.jsx
 │    ├── Form.jsx
 │    ├── Testimonials.jsx
 │    ├── FinalText.jsx
 │    └── Footer.jsx
 ├── App.jsx
 └── main.jsx
```