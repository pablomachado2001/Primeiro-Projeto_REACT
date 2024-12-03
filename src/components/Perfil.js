import styles from './Perfil.module.css'

function Perfil({imagem, nome, idade, cor}) {
 return (
    <div className={styles.container}>
        <img className={styles.imagemPerfil} src={imagem} alt={nome}/>
        <h2 className={styles.nomeComMensagem}>Bem vindo, {nome}!</h2>
        <p className={styles.idade}>Idade: {idade}</p>
        <p className={styles.cor}>Sua cor favorita é: {cor}</p>
    </div>
 )
}

export default Perfil