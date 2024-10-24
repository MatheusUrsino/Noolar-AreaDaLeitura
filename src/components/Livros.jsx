import './css/livrosstyle.css'

function Livros(props) {
  return (
    
    <div className="livro">
      <img className='imagemLivro' src={props.image} alt={props.desc} />
      <h4>{props.titulo}</h4>
      <p>{props.autor}</p>
    </div>
  );
}

export default Livros;
