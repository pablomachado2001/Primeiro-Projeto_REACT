function Perfil({imagem, nome, idade, cor}) {
 return (
    <div>
        <img src={imagem} alt={nome}/>
        <h2>Bem vindo, {nome}!</h2>
        <p>Idade: {idade}</p>
        <p>Sua cor favorita é: {cor}</p>
    </div>
 )
}

export default Perfil