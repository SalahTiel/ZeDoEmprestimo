import style from'./FAQ.module.css'

import logo from '../../assets/logo.png'

function FAQ () {
    return(
    <section className={style.faq}>
        <header>
            <a href="/">
                <img className={style.logo} src={logo} alt="" />
            </a>
            <nav>
                <a href="#renda">Renda</a>
                <a href="#imovel">Imóvel</a>
                <a href="#amortizacao">Amortização</a>
                <a href="#etapas">Etapas</a>
                <a className={style.receiveContact}>Receber Contato</a>
            </nav>
        </header>

        <h1>Tire as suas dúvidas aqui</h1>

        <div className={style.section} id='renda'>
        <h2>Renda</h2>
            <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet molestie ipsum, ut dapibus lorem volutpat et. Duis elementum risus molestie dolor ultricies, dictum eleifend sapien consequat. Pellentesque venenatis convallis orci non molestie. Aenean vel risus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquet cursus pellentesque. Proin quis tortor in ligula blandit efficitur sit amet eu elit. Quisque tincidunt, elit molestie blandit sagittis, lacus nisl semper lectus, facilisis cursus quam elit et massa. Sed et efficitur risus. Nulla posuere, nisi ut scelerisque mattis, orci mi euismod orci, et placerat dolor elit vitae lacus. Ut dapibus in nibh in vulputate. Mauris bibendum turpis vel arcu congue mollis. Duis interdum ipsum egestas tellus accumsan aliquet. Aliquam eu ultrices metus. Nunc facilisis massa libero, in iaculis nunc iaculis at. Nulla convallis dolor quam, at tincidunt eros commodo ac.
            Donec eu aliquet libero.</p>
            <iframe className={style.video} width="100%" height="315" src="https://www.youtube.com/embed/ITBMT-sUeH0?si=mHXHy2gw_TCHU4sO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            <div className={style.questions}>
                <details>
                    <summary>Pergunta 1 <span></span></summary>
                    <p>Resposta 1</p>
                </details>
                <details>
                    <summary>Pergunta 2 <span></span></summary>
                    <p>Resposta 2</p>
                </details>
                <details>
                    <summary>Pergunta 3 <span></span></summary>
                    <p>Resposta 3</p>
                </details>
                <details>
                    <summary>Pergunta 4 <span></span></summary>
                    <p>Resposta 4</p>
                </details>
            </div>
        </div>
        

        <div className={style.section} id='imovel'>
        <h2>Imóvel</h2>
            <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet molestie ipsum, ut dapibus lorem volutpat et. Duis elementum risus molestie dolor ultricies, dictum eleifend sapien consequat. Pellentesque venenatis convallis orci non molestie. Aenean vel risus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquet cursus pellentesque. Proin quis tortor in ligula blandit efficitur sit amet eu elit. Quisque tincidunt, elit molestie blandit sagittis, lacus nisl semper lectus, facilisis cursus quam elit et massa. Sed et efficitur risus. Nulla posuere, nisi ut scelerisque mattis, orci mi euismod orci, et placerat dolor elit vitae lacus. Ut dapibus in nibh in vulputate. Mauris bibendum turpis vel arcu congue mollis. Duis interdum ipsum egestas tellus accumsan aliquet. Aliquam eu ultrices metus. Nunc facilisis massa libero, in iaculis nunc iaculis at. Nulla convallis dolor quam, at tincidunt eros commodo ac.
            Donec eu aliquet libero.</p>
            <iframe className={style.video} width="100%" height="315" src="https://www.youtube.com/embed/ITBMT-sUeH0?si=mHXHy2gw_TCHU4sO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            <div className={style.questions}>
                <details>
                    <summary>Pergunta 1 <span></span></summary>
                    <p>Resposta 1</p>
                </details>
                <details>
                    <summary>Pergunta 2 <span></span></summary>
                    <p>Resposta 2</p>
                </details>
                <details>
                    <summary>Pergunta 3 <span></span></summary>
                    <p>Resposta 3</p>
                </details>
                <details>
                    <summary>Pergunta 4 <span></span></summary>
                    <p>Resposta 4</p>
                </details>
            </div>
        </div>


        <div className={style.section} id='amortizacao'>
        <h2>Amortização</h2>
            <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet molestie ipsum, ut dapibus lorem volutpat et. Duis elementum risus molestie dolor ultricies, dictum eleifend sapien consequat. Pellentesque venenatis convallis orci non molestie. Aenean vel risus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquet cursus pellentesque. Proin quis tortor in ligula blandit efficitur sit amet eu elit. Quisque tincidunt, elit molestie blandit sagittis, lacus nisl semper lectus, facilisis cursus quam elit et massa. Sed et efficitur risus. Nulla posuere, nisi ut scelerisque mattis, orci mi euismod orci, et placerat dolor elit vitae lacus. Ut dapibus in nibh in vulputate. Mauris bibendum turpis vel arcu congue mollis. Duis interdum ipsum egestas tellus accumsan aliquet. Aliquam eu ultrices metus. Nunc facilisis massa libero, in iaculis nunc iaculis at. Nulla convallis dolor quam, at tincidunt eros commodo ac.
            Donec eu aliquet libero.</p>
            <iframe className={style.video} width="100%" height="315" src="https://www.youtube.com/embed/ITBMT-sUeH0?si=mHXHy2gw_TCHU4sO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            <div className={style.questions}>
                <details>
                    <summary>Pergunta 1 <span></span></summary>
                    <p>Resposta 1</p>
                </details>
                <details>
                    <summary>Pergunta 2 <span></span></summary>
                    <p>Resposta 2</p>
                </details>
                <details>
                    <summary>Pergunta 3 <span></span></summary>
                    <p>Resposta 3</p>
                </details>
                <details>
                    <summary>Pergunta 4 <span></span></summary>
                    <p>Resposta 4</p>
                </details>
            </div>
        </div>

        <div className={style.section} id='etapas'>
        <h2>Etapas</h2>
            <p className={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet molestie ipsum, ut dapibus lorem volutpat et. Duis elementum risus molestie dolor ultricies, dictum eleifend sapien consequat. Pellentesque venenatis convallis orci non molestie. Aenean vel risus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquet cursus pellentesque. Proin quis tortor in ligula blandit efficitur sit amet eu elit. Quisque tincidunt, elit molestie blandit sagittis, lacus nisl semper lectus, facilisis cursus quam elit et massa. Sed et efficitur risus. Nulla posuere, nisi ut scelerisque mattis, orci mi euismod orci, et placerat dolor elit vitae lacus. Ut dapibus in nibh in vulputate. Mauris bibendum turpis vel arcu congue mollis. Duis interdum ipsum egestas tellus accumsan aliquet. Aliquam eu ultrices metus. Nunc facilisis massa libero, in iaculis nunc iaculis at. Nulla convallis dolor quam, at tincidunt eros commodo ac.
            Donec eu aliquet libero.</p>
            <iframe className={style.video} width="100%" height="315" src="https://www.youtube.com/embed/ITBMT-sUeH0?si=mHXHy2gw_TCHU4sO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            <div className={style.questions}>
                <details>
                    <summary>Pergunta 1 <span></span></summary>
                    <p>Resposta 1</p>
                </details>
                <details>
                    <summary>Pergunta 2 <span></span></summary>
                    <p>Resposta 2</p>
                </details>
                <details>
                    <summary>Pergunta 3 <span></span></summary>
                    <p>Resposta 3</p>
                </details>
                <details>
                    <summary>Pergunta 4 <span></span></summary>
                    <p>Resposta 4</p>
                </details>
            </div>
        </div>

        
       
    </section>
    )
}

export default FAQ