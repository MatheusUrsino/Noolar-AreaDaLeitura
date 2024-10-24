import './css/Categorias.css'

function BoxLivros(props)  {
    return (
        <div className="box-livros">
            <div className="card">
            <h3 className='Categoria'>{props.categoria}:</h3>
            <p className='textoDoCard'>{props.textoCard}</p>
            <div className="livros">
            </div>
            </div>
        </div>
    )
}

export default BoxLivros;