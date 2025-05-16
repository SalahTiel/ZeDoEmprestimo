import style from'./FAQ.module.css'

import {collection, getDocs} from "firebase/firestore"
import {db} from "../../services/firebase.config"

import ContactForm from '../../components/ContactForm/ContactForm'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import logo from '../../assets/logo2.png'

function FAQ () {
    const {id} = useParams()
    const [topics, setTopics] = useState([])
    const [toggleContact, setToggleContact] = useState(false)

    useEffect(()=>{
        getFaqData()
    }, [])

    async function getFaqData () {
        let list = []
        const querySnapshot = await getDocs(collection(db, "solucoes", id, "faq"))
        querySnapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data()})
        });
        setTopics([...list])
    }

    return(
    <section className={style.faq}>
        <header>
            <a href="/">
                <img className={style.logo} src={logo} alt="" />
            </a>
            <nav>
                {topics.map((doc)=>(<a key={doc.id} href={`#${doc.titulo}`}>{doc.titulo}</a>))}
            </nav>
        </header>

        <h1>Tire as suas dúvidas aqui</h1>

        {topics.map((doc)=>(
        <div className={style.section} id={doc.titulo} key={doc.id}>
            <h2>{doc.titulo}</h2>
            <p className={style.paragraph}>{doc.texto}</p>
            {doc.videosrc &&(
                <iframe className={style.video} width="100%" height="315" src={doc.videosrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            )}
            <div className={style.questions}>
                {doc.pergunta1 && (
                    <details>
                        <summary>{doc.pergunta1}<span></span></summary>
                        <p>{doc.resposta1}</p>
                    </details>
                )}

                {doc.pergunta2 && (
                    <details>
                        <summary>{doc.pergunta2}<span></span></summary>
                        <p>{doc.resposta2}</p>
                    </details>
                )}

                {doc.pergunta3 && (
                    <details>
                        <summary>{doc.pergunta3}<span></span></summary>
                        <p>{doc.resposta3}</p>
                    </details>
                )}

                {doc.pergunta4 && (
                    <details>
                        <summary>{doc.pergunta4}<span></span></summary>
                        <p>{doc.resposta4}</p>
                    </details>
                )}

                {doc.pergunta5 && (
                    <details>
                        <summary>{doc.pergunta5}<span></span></summary>
                        <p>{doc.resposta5}</p>
                    </details>
                )}
                

                
            </div>
        </div>))}

        <div className={style.buttons}>
            <a href={`/simulator/${id}`}>Simulador</a>
            <a onClick={()=>{setToggleContact(true)}}>Receber Contato</a>
            <a href={`/incluir-proposta/${id}`}>Incluir Proposta</a>
        </div>

        {toggleContact && (
        <>
            <div onClick={()=>{setToggleContact(false)}} className={style.formBackground}></div>
            <ContactForm/>
        </>
        )}
    </section>
    )
}

export default FAQ