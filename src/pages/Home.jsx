import style from './Home.module.css'
import { useEffect, useState } from 'react'

import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../services/firebase.config"

import Map from '../components/map'

import logo from '../assets/logo2.png'
import openMenu from '../assets/icon-menu.png'
import closeMenu from '../assets/icon-close.png'
import goal from '../assets/icon-goal.png'
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import person4 from '../assets/person4.png'
import person5 from '../assets/person5.png'
import arrow from '../assets/icon-arrow.svg'
import coin from '../assets/icon-coin.png' 
import person from '../assets/icon-person.png'
import handshake from '../assets/icon-handshake.png'
import happy from '../assets/icon-handshake.png'
import formbg from '../assets/img-formbg.jpg'
import whatsapp from '../assets/icon-whatsapp.svg'





const Home = () => {
    let open = false
    function toggleMenu(){
      
      open = !open
      const menu = document.querySelector(`.${style.mobileNavigation}`)
    
      if(open){
        menu.style.display = 'block'
      }
      else{
        menu.style.display = 'none'
      }
    }
    

    //carousel
    const carouselContent = document.querySelector(`.${style.carouselContent}`);
    const card = document.querySelectorAll(`.${style.cardComment}`);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        updateCarousel();
    },[currentIndex])
    
    function updateCarousel() {
        if(screen.width >= 1280){
          const offset = -currentIndex * 23.74;
          if(carouselContent){
              carouselContent.style.transform = `translateX(${offset}vw)`;
          }                                                                                              
        }else{
          const offset = -currentIndex * 90;
          if(carouselContent){
              carouselContent.style.transform = `translateX(${offset}vw)`;
          }
        }
    }
    
    function nextComment () {
        setCurrentIndex((currentIndex === 0) ? card.length - 1 : currentIndex - 1)
    }
    function previousComment () {
        setCurrentIndex((currentIndex === card.length - 1) ? 0 : currentIndex + 1)
    }


    //Solutions
    const [solutionsData, setSolutionsData] = useState([])
    useEffect(()=>{
        getSolutions()
    },[])


    async function getSolutions () {
        const q = query(collection(db, "solucoes"));
        const querySnapshot = await getDocs(q);
        let list = []
        querySnapshot.forEach((doc) => {
        // doc   .data() is never undefined for query doc snapshots
            list.push({
            id: doc.id,
            ...doc.data()})
        });
        setSolutionsData([...list])
    }
    



    return(
    <div>
        <header className={style.header}>
        <img className={style.logo} src={logo} alt="logotipo"/>

        <nav className={style.desktop}>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#solucoes">Soluções</a>
            <a href="#contato">Contato</a>
            <a href="/login">Área do Colaborador</a>
        </nav>

        <div onClick={()=>{toggleMenu()}} className={style.mobileMenu}>
            <img src={openMenu} alt=""/>
        </div>
        </header>

        <div className={style.mobileNavigation}>
        <img  onClick={()=>{toggleMenu()}} src={closeMenu} alt=""/>
        <nav>
            <a onClick={()=>{toggleMenu()}} href="#home">Home</a>
            <a onClick={()=>{toggleMenu()}} href="#sobre">Sobre</a>
            <a onClick={()=>{toggleMenu()}} href="#solucoes">Soluções</a>
            <a onClick={()=>{toggleMenu()}} href="#contato">Contato</a>
            <a href="/login">Área do Colaborador</a>
        </nav>
        </div>



        <section id="home" className={style.home}>
        <div className={style.text}>
            <h1>As Melhores Condições</h1>
            <p className={style.subtitle}>Entre em contanto agora mesmo e realize os seus sonhos!</p>
        </div>
        </section>



        <section className={style.cards}>
        <h2>Faça sua simulação aqui e conheça os melhores beneficios para você:</h2>
        <div className={style.wrapper}>
            <div className={style.card}>
                <img src={goal} alt=""/>
                <p className={style.title}>Financiamento Imobiliário - SFH</p>
                <p className={style.description}>Realize o sonho da casa própria</p>
            </div>

            <div className={style.card}>
                <img src={goal} alt=""/>
                <p className={style.title}>Crédito com Garantia de Imóvel</p>
                <p className={style.description}>Use o seu imóvel para conseguir dinheiro</p>
            </div>
        </div>
        </section>



        <section id="sobre" className={style.about}>
        <div className={style.text}>
            <h2>Conheça a Nossa Empresa!</h2>
            <p>Zé do Empréstimo é uma marca que nasce para consolidar a experiência de mais de 12 anos de mercado da Sorricred.</p>
            <p>Empresa com sede em Sorriso-MT, fundada em 2009 por ex-bancários, que enxergaram a carência de pessoas especializadas no mercado de intermediação financeira. Sendo uma atividade que estava em plena expansão decidiram então usar seu know how para contribuir na profissionalização desse setor.</p>
            <p>Nosso principal objetivo é o de ofertar soluções financeira adequadas para cada cliente e suas necessidades através de instituições financeiras parceiras. Prezando pela agilidade e qualidade nos processos.</p>
        </div>
        </section>



        <section className={style.comments}>
        <h2>O Que Nossos Clientes Dizem</h2>
        <p className={style.subtitle}>Nada melhor do que a satisfação dos nosos clientes <span>#ZeDoEmprestimo</span></p>

        <div className={style.carousel}>
        <div className={style.carouselContent}>

            <div className={style.cardComment}>
                <img src={person1} alt=""/>
                <p className={style.name}>Felipe Brasão</p>
                <p className={style.tag}>Servidor Público</p>
                <p className={style.comment}>"Atendimento nota 10! Sempre resolvem o meu problema."</p>
            </div>

            <div className={style.cardComment}>
                <img src={person2} alt=""/>
                <p className={style.name}>Andressa Figueira</p>
                <p className={style.tag}>Vendedora</p>
                <p className={style.comment}>"Minha experiência foi fantástica. Muito fácil e prático."</p>
            </div>

            <div className={style.cardComment}>
                <img src={person3} alt=""/>
                <p className={style.name}> Yuri Laerte</p>
                <p className={style.tag}>Arquiteto</p>
                <p className={style.comment}>"Exelentes profissionais sempre dispostos a me ajudar."</p>
            </div>

            <div className={style.cardComment}>
                <img src={person4} alt=""/>
                <p className={style.name}>Fabiana Figueira</p>
                <p className={style.tag}>Psicóloga</p>
                <p className={style.comment}>"Atendimento simplificado. Adorei a praticidade"</p>
            </div>

            <div className={style.cardComment}>
                <img src={person5} alt=""/>
                <p className={style.name}>Marcelo Silva</p>
                <p className={style.tag}>"Servidor Público"</p>
                <p className={style.comment}>"Consegui o meu crédito muito rápido. Recomendo muito"</p>
            </div>

        </div>
        </div>

        <div className={style.buttons}>
            <button onClick={() => {nextComment()}} className={style.prevBtn}><img src={arrow} alt=""/></button>
            <button onClick={() => {previousComment()}} className={style.nextBtn}><img src={arrow} alt=""/></button>
        </div>
        </section>



        <section className={style.numbers}>
        <h2>Ajudamos Você a Conquistar Seus Sonhos</h2>
        <div className={style.icons}>

            <div className={style.wrapper}>
                <img src={coin} alt=""/>
                <p className={style.number}>2 Mi</p>
                <p className={style.description}>Créditos Concedidos</p>
            </div>
            
            <div className={style.wrapper}>
                <img src={person} alt=""/>
                <p className={style.number}>1200</p>
                <p className={style.description}>Clientes Atendidos</p>
            </div>

            <div className={style.wrapper}>
                <img src={handshake} alt=""/>
                <p className={style.number}>23</p>
                <p className={style.description}>Parceiros de Crédito</p>
            </div>

            <div className={style.wrapper}>
                <img src={happy} alt=""/>
                <p className={style.number}>100%</p>
                <p className={style.description}>Satisfação</p>
            </div> 
        </div>
        </section>



        <section id="solucoes" className={style.solutions}>
        <h2>Nossas Soluções</h2>
        <div className={style.wrapper}>
            {solutionsData.map((doc)=>(
                <div className={style.card} key={doc.id}>
                    <img src="assets/img-solutions1.jpg" alt=""/>
                    <div className={style.text}>
                        <p className={style.name}>{doc.titulo}</p>
                        <p className={style.description}>{doc.subtitulo}</p>
                    </div>
                    <a href={`/solucao/${doc.id}`}>Faça uma Simulação</a>
                </div>
            ))}
        </div>
        </section>



        <section id="contato" className={style.contact}>
        <img className={style.background} src={formbg} alt=""/>
        <h2>Como Podemos te Ajudar?</h2>

        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.linkContent}>
                    <h3>Envie um formulário ou fale diretamente conosco via <span>WhatsApp</span></h3>
                    <p className={style.paragraph}>Contamos com um equipe de profissionais <span>qualificados</span>, que estão preparados para atender VOCÊ.
                        Estamos sempre dispostos a atender com <span>segurança, confiabilidade e respeito,</span> garantindo assim a melhor forma de ajudar com seu empréstimo.</p>
                    <a href=""><img src={whatsapp} alt=""/><p>WhatsApp</p></a>
                </div>

                <form action="">
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email"/>
                    <input type="tel" placeholder="WhatsApp"/>
                    <textarea name="" id="" placeholder="Como podemos te ajudar?"/>
                    <button>Enviar Mensagem</button>
                </form>
            </div>
        </div>
        </section>



        <section className={style.location}>
        <div className={style.text}>
            <h4 className={style.city}>Sorriso - MT</h4>
            <p className={style.tel}>(66) 3545-0400</p>
            <p className={style.tel}>(66) 99975-1627</p>
            <p className={style.email}>ze@zedoemprestimo.com</p>
            <p className={style.hour}>Seg. a Sex. - 08:00hrs / 17rhs</p>
            <p className={style.loc}>Av. Natalino João Brescansin, 104, Sala 8 - Centro Sul, Sorriso-MT 7886-072 <span>(Anexo a Sorricred)</span></p>
        </div>
        <Map/>
        </section>



        <footer>
        <div className={style.location}>
            <img src={logo} alt=""/>
            <p>Zé do Empréstimo</p>
            <p>66 3545-0400 / 9. 9654-1626</p>
            <p>Av. Natalino João Brescansin, 104, Sala 8 (Anexo a Sorricred), Sorriso-MT</p>
            <p>CEP: 78896-072</p>
            <p className={style.legend}>Todos os direitos reservados. Zé do Empréstimo</p>
            <p className={style.legend}>Produzido por @OuiDigital</p>
        </div>

        <div className={style.wrapper}>
            <div className={style.nav}>
                <h4>Navegação</h4>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#solucoes">Soluções</a>
                <a href="#contato">Contato</a>
            </div>

            <div className={style.links}>
                <h4>Links</h4>
            </div>
        </div>
    </footer>




    </div>)
}

export default Home