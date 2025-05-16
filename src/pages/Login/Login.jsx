import style from './Login.module.css'
import logo from '../../assets/logo2.png'
import { useNavigate } from 'react-router-dom';

import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../services/firebase.config'

function Login (){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const loginStatus = await signInWithEmailAndPassword(auth, email, password)
            console.log(loginStatus)
            navigate('/colaboradores')
        } catch (error) {
            console.log('Erro ao efetuar login', error.message)
        }
    }

    return(
        <div className={style.wrapper}>
            <a href="/">
                <img src={logo} alt="" />
            </a>
            <h1>Seja bem-vindo, Colaborador!</h1>
            <h2>Efetue o login para continuar</h2>
            <form action="">
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Senha"/>
                <button onClick={(e)=>{handleLogin(e)}} className={style.button} type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Login