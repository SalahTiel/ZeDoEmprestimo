import style from'./Solution.module.css'

import { useState } from 'react'

import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import logo from '../../assets/logo2.png'

function Solution () {
    const [toggleContact, setToggleContact] = useState(false)
    

return(
<div>
    <header className={style.header}>
        <a href="/">
            <img src={logo} alt=""/>
        </a>
    </header>

    <section className={style.post}>
        <h1>Title</h1>

        <h2>Subtitle</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet molestie ipsum, ut dapibus lorem volutpat et. Duis elementum risus molestie dolor ultricies, dictum eleifend sapien consequat. Pellentesque venenatis convallis orci non molestie. Aenean vel risus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquet cursus pellentesque. Proin quis tortor in ligula blandit efficitur sit amet eu elit. Quisque tincidunt, elit molestie blandit sagittis, lacus nisl semper lectus, facilisis cursus quam elit et massa. Sed et efficitur risus. Nulla posuere, nisi ut scelerisque mattis, orci mi euismod orci, et placerat dolor elit vitae lacus. Ut dapibus in nibh in vulputate. Mauris bibendum turpis vel arcu congue mollis. Duis interdum ipsum egestas tellus accumsan aliquet. Aliquam eu ultrices metus. Nunc facilisis massa libero, in iaculis nunc iaculis at. Nulla convallis dolor quam, at tincidunt eros commodo ac.
            Donec eu aliquet libero.</p>
    </section>

    <div className={style.buttons}>
        <a href="/simulator">Simulador</a>
        <a onClick={(e)=>{setToggleContact(!toggleContact)}}>Receber Contato</a>
        <a href="/incluir-proposta">Incluir Proposta</a>
        <a href="/faq">Saber mais</a>
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