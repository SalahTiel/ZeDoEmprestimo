import style from'./Solution.module.css'

import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

import {db} from '../../services/firebase.config.js'
import { collection, doc, getDoc } from "firebase/firestore";

import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import logo from '../../assets/logo2.png'

function Solution () {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [text, setText] = useState('')
    const [toggleContact, setToggleContact] = useState(false)

    useEffect(()=>{
        getData()
    }, [])

    async function getData(){
        const docRef = doc(db, "solucoes", id)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            const data = docSnap.data()
            setTitle(data.titulo)
            setSubtitle(data.subtitulo)
            setText(data.texto)
        } else{
            console.log('falha ao carregar conteúdo. Tente novamente')
        }
    }
    

return(
<div>
    <header className={style.header}>
        <a href="/">
            <img src={logo} alt=""/>
        </a>
    </header>

    <section className={style.post}>
        <h1>{title}</h1>

        <h2>{subtitle}</h2>

        <p>{text}</p>
    </section>

    <div className={style.buttons}>
        <a href={`/simulator/${id}`}>Simulador</a>
        <a onClick={(e)=>{setToggleContact(!toggleContact)}}>Receber Contato</a>
        <a href={`/incluir-proposta/${id}`}>Incluir Proposta</a>
        <a href={`/faq/${id}`}>Saber mais</a>
    </div>

    {toggleContact && (
    <>
        <div onClick={()=>{setToggleContact(!toggleContact)}} className={style.formBackground}></div>
        <ContactForm/>
    </>
    )}
</div>)
}

export default Solution