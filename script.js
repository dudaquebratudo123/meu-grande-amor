// ⏳ DATA DE INÍCIO DO NAMORO
const dataInicio = new Date("2024-12-30"); // ajuste se necessário

const hoje = new Date();
const diferenca = hoje - dataInicio;
const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

document.getElementById("contador").innerText =
  `Estamos juntas há ${dias} dias 💞`;

//musica
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

let tocando = false;

playBtn.addEventListener("click", () => {
  if (!tocando) {
    music.play();
    playBtn.textContent = "⏸️";
    tocando = true;
  } else {
    music.pause();
    playBtn.textContent = "▶️";
    tocando = false;
  }
});


function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.style.display = "block";

  const linhas = document.querySelectorAll(".linha");
  linhas.forEach((linha, index) => {
    setTimeout(() => {
      linha.classList.add("aparecer");
    }, index * 700);
  });

  criarCoracoes();
}

function mostrarPromessa() {
  const promessa = document.getElementById("promessa");
  promessa.style.display = "block";
  promessa.classList.add("aparecer");
  criarCoracoes();
}

function criarCoracoes() {
  for (let i = 0; i < 20; i++) {
    const c = document.createElement("div");
    c.innerHTML = "💖";
    c.classList.add("coracao");
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

