import { Link } from "react-router-dom"; // Importa o componente Link para navegação entre páginas
import { FaStar } from "react-icons/fa"; // Importa o ícone de estrela da biblioteca react-icons

const imagesURL = import.meta.env.VITE_IMG; // Pega a URL base das imagens do arquivo .env

// Componente MovieCard recebe um objeto movie e um booleano showLink (padrão true)
const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card"> {/* Container do card do filme */}
      {/* Exibe o pôster do filme */}
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      {/* Exibe o título do filme */}
      <h2>{movie.title}</h2>
      {/* Exibe a nota do filme com um ícone de estrela */}
      <p>
        <FaStar /> {movie.vote_average ? Number(movie.vote_average).toFixed(1) : "N/A"}
      </p>
      {/* Se showLink for true, exibe o link para a página de detalhes do filme */}
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard; // Exporta o componente para ser usado em outros arquivos