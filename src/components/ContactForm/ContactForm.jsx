import { useState } from 'react'
import style from './ContactForm.module.css'

function ContactForm (){
    const [send, setSend] = useState(true)

    function sendEmail (event) {
        event.preventDefault();
        setSend(!send)
    }


    return(
    <form className={style.contact} action="">
    {send ? (
        <>
        <legend className={style.title}>Entre em contato</legend>
        <div className={style.item}>
            <label htmlFor="name">Nome</label>
            <input name="nome" type="text"/>
        </div>

        <div className={style.item}>
            <label htmlFor="name">Email</label>
            <input name="nome" type="email"/>
        </div>

        <div className={style.item}>
            <label htmlFor="name">Telefone</label>
            <input name="nome" type="number"/>
        </div>

        <button onClick={sendEmail}>Enviar Contato</button>
        </>
    ) : (
        <>
        <p className={style.title}>Sucesso!</p>
        <p className={style.message}>Seus dados foram enviados com sucesso. Entraremos em contato em breve.</p>
        <p className={style.message}>Horário de atendimento: Seg. á Sex. em horário comercial (exceto feriados)</p>
        </>
    )}
        
    </form>
    )
}

export default ContactForm