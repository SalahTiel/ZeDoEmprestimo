import style from './Simulator.module.css'

import ContactForm from '../../components/ContactForm/ContactForm'

import {useParams} from 'react-router-dom'

import { useState } from 'react'
import close from '../../assets/icon-close.png'
import check from '../../assets/icon-check.svg'
import doc from '../../assets/icon-doc.svg'
import logo2 from '../../assets/logo2.png'



function Simulator () {
    const {id} = useParams()
    const [toggleProposal, setToggleProposal] = useState(false)

    const [inputName, setInputName] = useState('')
    const [inputCPF, setInputCPF] = useState()
    const [inputTel, setInputTel] = useState()
    const [inputTel2, setInputTel2] = useState()
    const [inputTel3, setInputTel3] = useState()
    const [inputTel4, setInputTel4] = useState()
    const [inputTel5, setInputTel5] = useState()
    const [moreNumbers, setMoreNumbers] = useState(false)
    const [inputCredit, setInputCredit] = useState()

    const [popUpOpen, setPopUpOpen] = useState(false)
    const [toggleContact, setToggleContact] = useState(false)

    function sendProposal (e){
        e.preventDefault()
        setToggleProposal(false)
        setPopUpOpen(true)
    }


    return(
    <>
        <header className={style.simulatorHeader}>
            <a href="/"><img src={logo2}/></a>
        </header>
        <section className={style.simulator}>
        <h2>Simulador</h2>

        <form action="">
            <div className={style.item}>
                <label htmlFor="nome">Nome:</label>
                <input value={inputName} onChange={(e)=>{setInputName(e.target.value)}} name='nome' type="text"/>
            </div>
            <div className={style.item}>
                <label htmlFor="CPF">CPF:</label>
                <input value={inputCPF} onChange={(e)=>{setInputCPF(e.target.value)}} name='CPF' type="number"/>
            </div>
            <div className={style.item}>
                <label htmlFor="telefone">Telefone:</label>
                <input value={inputTel} onChange={(e)=>{setInputTel(e.target.value)}} name='telefone' type="tel"/>
            </div>

            <p className={style.legend}>Deseja informar mais de um telefone?</p>
            <div className={style.option}>
                 <input onClick={()=>{setMoreNumbers(true)}} type="radio" name="moreNumbers" id="moreNumbersYes"/>
                <label className={style.box} htmlFor="moreNumbersYes">
                    <img src={check} alt=""/>
                </label>
                <p>Sim</p>
            </div>
            <div className={style.option}>
                <input onClick={()=>{setMoreNumbers(false)}} type="radio" name="moreNumbers" id="moreNumbersNo"/>
                <label className={style.box} htmlFor="moreNumbersNo">
                    <img src={check} alt=""/>
                </label>
                <p>Não</p>
            </div>

            {moreNumbers && (
            <>
            <div className={style.item}>
                <label htmlFor="telefone2">Telefone:</label>
                <input value={inputTel2} onChange={(e)=>{setInputTel2(e.target.value)}} name='telefone2' type="tel"/>
            </div>
            <div className={style.item}>
                <label htmlFor="telefone3">Telefone (opcional):</label>
                <input value={inputTel3} onChange={(e)=>{setInputTel3(e.target.value)}} name='telefone3' type="tel"/>
            </div>
            <div className={style.item}>
                <label htmlFor="telefone4">Telefone (opcional):</label>
                <input value={inputTel4} onChange={(e)=>{setInputTel4(e.target.value)}} name='telefone4' type="tel"/>
            </div>
            <div className={style.item}>
                <label htmlFor="telefone5">Telefone (opcional):</label>
                <input value={inputTel5} onChange={(e)=>{setInputTel5(e.target.value)}} name='telefone5' type="tel"/>
            </div>
            </>
            )}
            
            <div className={style.item}>
                <label htmlFor="credito">Valor de crédito pretendido:</label>
                <input value={inputCredit} onChange={(e)=>{setInputCredit(e.target.value)}} name='credito' type="number"/>
            </div>

            <button onClick={sendProposal} className={style.send}>Enviar Proposta</button>
        </form>

        <div className={style.buttons}>
            <a href={`/incluir-proposta/${id}`}>Incluir Proposta</a>
            <button onClick={()=>{setToggleContact(true)}}>Receber Contato</button>
            <a href={`/faq/${id}`}>Saber Mais</a>
        </div>
        
        {popUpOpen && (
        <div className={style.contactPopUp}>
            <div onClick={()=>{setPopUpOpen(false)}} className={style.background}></div>
            <div className={style.wrapper}>
                <p className={style.title}>Sucesso!</p>
                <p className={style.message}>Seus dados foram enviados com sucesso. Entraremos em contato em breve.</p>
                <p className={style.message}>Horário de atendimento: Seg. á Sex. em horário comercial (exceto feriados)</p>
            </div>
        </div>
        )}

        {toggleContact && (
        <>
            <div onClick={()=>{setToggleContact(false)}} className={style.formBackground}></div>
            <ContactForm/>
        </>
        )}
        
    </section>
    </>
    )
}

export default Simulator