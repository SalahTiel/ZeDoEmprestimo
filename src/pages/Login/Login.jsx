import style from './Login.module.css'
import logo from '../../assets/logo.png'

function Login (){
    return(
        <div className={style.wrapper}>
            <a href="/">
                <img src={logo} alt="" />
            </a>
            <h1>Seja bem-vindo, Colaborador!</h1>
            <h2>Efetue o login para continuar</h2>
            <form action="">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
            </form>

            <a href="/colaboradores" className={style.button}>Entrar</a>
        </div>
    )
}

export default Login