import React, { useRef } from "react";
import "./App.css";
import AreaDaLeitura from "./components/Inicio";
import BoxLivros from "./components/Categorias";
import Livros from "./components/Livros";

// Definindo as categorias e livros com título, autor, imagem e descrição
const categorias = [
  {
    nome: "Português",
    livros: [
      { titulo: "Livro A", autor: "Autor A", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro B", autor: "Autor B", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro C", autor: "Autor C", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro A", autor: "Autor A", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro B", autor: "Autor B", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro C", autor: "Autor C", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro A", autor: "Autor A", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro B", autor: "Autor B", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
      { titulo: "Livro C", autor: "Autor C", image: "https://marketplace.canva.com/EAF4gLHCnKI/1/0/1003w/canva-capa-de-livro-e-caderno-de-portugu%C3%AAs-escolar-ilustrado-amarelo-e-branco-450TBsRCeow.jpg", desc: "Capa do livro" },
    ],
  },
  {
    nome: "Educativos",
    livros: [
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
    ],
  },
  {
    nome: "Educativos",
    livros: [
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
    ],
  },
  {
    nome: "Educativos",
    livros: [
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
    ],
  },
  {
    nome: "Educativos",
    livros: [
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro D", autor: "Autor D", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro E", autor: "Autor E", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
      { titulo: "Livro F", autor: "Autor F", image: "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg", desc: "Capa do livro" },
    ],
  },
];

function App() {
  // Referências para cada lista de livros nas categorias
  const livrosRefs = useRef([]);

  // Função para capturar o início do clique e configurar o scroll manual (drag)
  const handleMouseDown = (e, index) => {
    const currentRef = livrosRefs.current[index];
    if (!currentRef) return;

    const startX = e.pageX - currentRef.offsetLeft;
    const scrollLeft = currentRef.scrollLeft;

    // Função para mover a lista de livros horizontalmente
    const handleMouseMove = (e) => {
      const x = e.pageX - currentRef.offsetLeft;
      const walk = (x - startX) * 2;
      currentRef.scrollLeft = scrollLeft - walk;
    };

    // Função para encerrar o movimento ao soltar o mouse
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Adicionando eventos de movimento e liberação do mouse
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="page">
      {/* Componente de cabeçalho com título e subtítulo */}
      <AreaDaLeitura
        titulo="Área da Leitura"
        subtitulo={
          <>
            Consuma conteúdos <span className="highlight">educativos,</span>{" "}
            <span className="highlight">culturais</span> e{" "}
            <span className="highlight">agregadores!</span>
          </>
        }
      />

      {/* Área dos cards que exibem as categorias de livros */}
      <div className="cardsArea">
        {categorias.map((categoria, cardIndex) => (
          <div className="card" key={cardIndex}>
            {/* Componente BoxLivros que exibe a categoria e texto */}
            <BoxLivros
              categoria={categoria.nome}
              textoCard={
                <>
                  Aprimore sua <span className="highlight">Compreensão</span> da
                  língua, <span className="highlight">amplie</span> seu
                  vocabulário e <span className="highlight">escreva</span> de
                  forma mais clara e precisa!
                </>
              }
            />
            
            {/* Lista de livros que podem ser movidos com arraste */}
            <div
              className="livros"
              ref={(el) => (livrosRefs.current[cardIndex] = el)}
              onMouseDown={(e) => handleMouseDown(e, cardIndex)}
            >
              {categoria.livros.map((livro, index) => (
                <Livros key={index} {...livro} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
