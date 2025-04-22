import style from './Simulator.module.css'

import ContactForm from '../../components/ContactForm/ContactForm'

import { useState } from 'react'
import close from '../../assets/icon-close.png'
import check from '../../assets/icon-check.svg'
import doc from '../../assets/icon-doc.svg'
import logo2 from '../../assets/logo2.png'



function Simulator () {
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
    const [inputEmail, setInputEmail] = useState()

    const [inputPropertyValue, setInputPropertyValue] = useState()
    const [inputPropertyCEP, setInputPropertyCEP] = useState()
    const [inputPropertyStreet, setInputPropertyStreet] = useState()
    const [inputPropertyNumber, setInputPropertyNumber] = useState()
    const [inputPropertyNeighborhood, setInputPropertyNeighborhood] = useState()
    const [inputPropertyCity, setInputPropertyCity] = useState()
    const [inputPropertyState, setInputPropertyState] = useState()
        
    const [sameAddress, setSameAddress] = useState(true)
    const [inputAddressCEP, setInputAddressCEP] = useState()
    const [inputAddressStreet, setInputAddressStreet] = useState()
    const [inputAddressNumber, setInputAddressNumber] = useState()
    const [inputAddressNeighborhood, setInputAddressNeighborhood] = useState()
    const [inputAddressCity, setInputAddressCity] = useState()
    const [inputAddressState, setInputAddressState] = useState()

    const [maritalStatus, setMaritalStatus] = useState()
    const [inputSpouseName, setInputSpouseName] = useState()
    const [inputSpouseCPF, setInputSpouseCPF] = useState()
    const [inputSpouseTel, setInputSpouseTel] = useState()
    const [inputSpouseEmail, setInputSpouseEmail] = useState()
    const [spouseSameAddress, setSpouseSameAddress] = useState(true)
    const [inputSpouseCEP, setInputSpouseCEP] = useState()
    const [inputSpouseStreet, setInputSpouseStreet] = useState()
    const [inputSpouseNumber, setInputSpouseNumber] = useState()
    const [inputSpouseNeighborhood, setInputSpouseNeighborhood] = useState()
    const [inputSpouseCity, setInputSpouseCity] = useState()
    const [inputSpouseState, setInputSpouseState] = useState()

    const [secondProponent, setSecondProponent] = useState()
    const [inputSecondProponentName, setInputSecondProponentName] = useState()
    const [inputSecondProponentCPF, setInputSecondProponentCPF] = useState()
    const [inputSecondProponentTel, setInputSecondProponentTel] = useState()
    const [inputSecondProponentEmail, setInputSecondProponentEmail] = useState()
    const [inputSecondProponentCEP, setInputSecondProponentCEP] = useState()
    const [inputSecondProponentStreet, setInputSecondProponentStreet] = useState()
    const [inputSecondProponentNumber, setInputSecondProponentNumber] = useState()
    const [inputSecondProponentNeighborhood, setInputSecondProponentNeighborhood] = useState()
    const [inputSecondProponentCity, setInputSecondProponentCity] = useState()
    const [inputSecondProponentState, setInputSecondProponentState] = useState()

    const [thirdProponent, setThirdProponent] = useState()
    const [inputThirdProponentName, setInputThirdProponentName] = useState()
    const [inputThirdProponentCPF, setInputThirdProponentCPF] = useState()
    const [inputThirdProponentTel, setInputThirdProponentTel] = useState()
    const [inputThirdProponentEmail, setInputThirdProponentEmail] = useState()
    const [inputThirdProponentCEP, setInputThirdProponentCEP] = useState()
    const [inputThirdProponentStreet, setInputThirdProponentStreet] = useState()
    const [inputThirdProponentNumber, setInputThirdProponentNumber] = useState()
    const [inputThirdProponentNeighborhood, setInputThirdProponentNeighborhood] = useState()
    const [inputThirdProponentCity, setInputThirdProponentCity] = useState()
    const [inputThirdProponentState, setInputThirdProponentState] = useState()

    const [fileRG, setFileRG] = useState(null)
    const [filePropertyDoc, setFilePropertyDoc] = useState(null)
    const [fileRentDoc, setFileRentDoc] = useState([])

    const [includeLatterRG, setIncludeLatterRG] = useState(true)
    const [includeLatterProperty, setIncludeLatterProperty] = useState(true)
    const [includeLatterRent, setIncludeLatterRent] = useState(true)

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
            <button onClick={()=>{setToggleProposal(!toggleProposal)}}>Incluir Proposta</button>
            <button onClick={()=>{setToggleContact(true)}}>Receber Contato</button>
            <a href="/FAQ">Saber Mais</a>
        </div>
        {toggleProposal && (
        <>
        <div onClick={()=>{setToggleProposal(!toggleProposal)}} className={style.background}></div>
        <div className={style.proposal}>
            <img onClick={()=>{setToggleProposal(!toggleProposal)}} className={style.close} src={close} alt="" />
            <h3>Incluir Proposta</h3>

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

            <div className={style.item}>
                <label htmlFor="credito">Valor de crédito pretendido:</label>
                <input value={inputCredit} onChange={(e)=>{setInputCredit(e.target.value)}} name='credito' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="email">Email:</label>
                <input value={inputEmail} onChange={(e)=>{setInputEmail(e.target.value)}} name='email' type="email"/>
            </div>

            <div className={style.item}>
                <label htmlFor="valorDoImovel">Valor estimado do imóvel:</label>
                <input value={inputPropertyValue} onChange={(e)=>{setInputPropertyValue(e.target.value)}} name='valorDoImovel' type="number"/>
            </div>

            {/*property*/}
            <p className={style.legend}>Endereço do Imóvel:</p>

            <div className={style.item}>
                <label htmlFor="CEP">CEP:</label>
                <input value={inputPropertyCEP} onChange={(e)=>{setInputPropertyCEP(e.target.value)}} name='CEP' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="rua">Rua:</label>
                <input value={inputPropertyStreet} onChange={(e)=>{setInputPropertyStreet(e.target.value)}} name='rua' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="numero">Número:</label>
                <input value={inputPropertyNumber} onChange={(e)=>{setInputPropertyNumber(e.target.value)}} name='numero' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="bairro">Bairro:</label>
                <input value={inputPropertyNeighborhood} onChange={(e)=>{setInputPropertyNeighborhood(e.target.value)}} name='bairro' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="cidade">Cidade:</label>
                <input value={inputPropertyCity} onChange={(e)=>{setInputPropertyCity(e.target.value)}} name='cidade' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="estado">Estado:</label>
                <input value={inputPropertyState} onChange={(e)=>{setInputPropertyState(e.target.value)}} name='estado' type="text"/>
            </div>

            <p className={style.legend}>Endereço residencial é o mesmo do imóvel informado?</p>
        
            <div className={style.option}>
                 <input onClick={()=>{setSameAddress(true)}} type="radio" name="sameAddress" id="sameAddressYes"/>
                <label className={style.box} htmlFor="sameAddressYes">
                    <img src={check} alt=""/>
                </label>
                <p>Sim</p>
            </div>
            <div className={style.option}>
                <input onClick={()=>{setSameAddress(false)}} type="radio" name="sameAddress" id="sameAddressNo"/>
                <label className={style.box} htmlFor="sameAddressNo">
                    <img src={check} alt=""/>
                </label>
                <p>Não</p>
            </div>

            {/*address*/}
            {sameAddress === false && (
            <>
            <p className={style.legend}>Informe o seu endereço residencial:</p>
            <div className={style.item}>
                <label htmlFor="CEP">CEP:</label>
                <input value={inputAddressCEP} onChange={(e)=>{setInputAddressCEP(e.target.value)}} name='CEP' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="rua">Rua:</label>
                <input value={inputAddressStreet} onChange={(e)=>{setInputAddressStreet(e.target.value)}} name='rua' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="numero">Número:</label>
                <input value={inputAddressNumber} onChange={(e)=>{setInputAddressNumber(e.target.value)}} name='numero' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="bairro">Bairro:</label>
                <input value={inputAddressNeighborhood} onChange={(e)=>{setInputAddressNeighborhood(e.target.value)}} name='bairro' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="cidade">Cidade:</label>
                <input value={inputAddressCity} onChange={(e)=>{setInputAddressCity(e.target.value)}} name='cidade' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="estado">Estado:</label>
                <input value={inputAddressState} onChange={(e)=>{setInputAddressState(e.target.value)}} name='estado' type="text"/>
            </div>
            </>)}

            <p className={style.legend}>Estado civil:</p>
            <select onChange={(e)=>{setMaritalStatus(e.target.value)}} name="estado civil" id="">
                <option value="Solteiro">Solteiro(a)</option>
                <option value="Casado">Casado(a)</option>
                <option value="Separado">Separado(a)</option>
                <option value="Víuvo">Víuvo(a)</option>
            </select>

            {maritalStatus === 'Casado' && (
            <>
            <div className={style.item}>
                <label htmlFor="nome do cônjuge">Nome do cônjuge:</label>
                <input value={inputSpouseName} onChange={(e)=>{setInputSpouseName(e.target.value)}} name='nome do cônjuge' type="text"/>
            </div>
            <div className={style.item}>
                <label htmlFor="CPF do cônjuge">CPF do cônjuge:</label>
                <input value={inputSpouseCPF} onChange={(e)=>{setInputSpouseCPF(e.target.value)}} name='CPF do cônjuge' type="number"/>
            </div>
            <div className={style.item}>
                <label htmlFor="telefone do cônjuge">Telefone do Cônjuge:</label>
                <input value={inputSpouseTel} onChange={(e)=>{setInputSpouseTel(e.target.value)}} name='telefone do cônjuge' type="tel"/>
            </div>
            <div className={style.item}>
                <label htmlFor="email do cônjuge">Email do Cônjuge:</label>
                <input value={inputSpouseEmail} onChange={(e)=>{setInputSpouseEmail(e.target.value)}} name='email do cônjuge' type="email"/>
            </div>

            <p className={style.legend}>O endereço residencial do cônjuge é o mesmo informado anteriormente?</p>
            <div className={style.option}>
                 <input onClick={()=>{setSpouseSameAddress(true)}} type="radio" name="spouseSameAddress" id="spouseSameAddressYes"/>
                <label className={style.box} htmlFor="spouseSameAddressYes">
                    <img src={check} alt=""/>
                </label>
                <p>Sim</p>
            </div>
            <div className={style.option}>
                <input onClick={()=>{setSpouseSameAddress(false)}} type="radio" name="spouseSameAddress" id="spouseSameAddressNo"/>
                <label className={style.box} htmlFor="spouseSameAddressNo">
                    <img src={check} alt=""/>
                </label>
                <p>Não</p>
            </div>
            </>)}

            {spouseSameAddress === false && (
            <>
            <p className={style.legend}>Informe o endereço do cônjuge:</p>
            <div className={style.item}>
                <label htmlFor="spouseCEP">CEP:</label>
                <input value={inputSpouseCEP} onChange={(e)=>{setInputSpouseCEP(e.target.value)}} name='spouseCEP' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="spouseRua">Rua:</label>
                <input value={inputSpouseStreet} onChange={(e)=>{setInputSpouseStreet(e.target.value)}} name='spouseRua' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="spouseNumero">Número:</label>
                <input value={inputSpouseNumber} onChange={(e)=>{setInputSpouseNumber(e.target.value)}} name='spouseNumero' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="spouseBairro">Bairro:</label>
                <input value={inputSpouseNeighborhood} onChange={(e)=>{setInputSpouseNeighborhood(e.target.value)}} name='spouseBairro' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="spouseCidade">Cidade:</label>
                <input value={inputSpouseCity} onChange={(e)=>{setInputSpouseCity(e.target.value)}} name='spouseCidade' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="spouseEstado">Estado:</label>
                <input value={inputSpouseState} onChange={(e)=>{setInputSpouseState(e.target.value)}} name='spouseEstado' type="text"/>
            </div>
            </>)}
            
            <p className={style.legend}>Atividade profissional:</p>
            <select onChange={(e)=>{setMaritalStatus(e.target.value)}} name="Atividade profissional" id="">
                <option value="Solteiro">Assalariado(a)</option>
                <option value="Casado">Empresário(a)</option>
                <option value="Separado">Servidor(a) público(a)</option>
                <option value="Víuvo">Agropecuarista</option>
                <option value="Casado">Autônomo(a)</option>
                <option value="Casado">Renda do capital</option>
                <option value="Casado">Aposentado/pensionista</option>
            </select>

            <p className={style.legend}>Essa operação terá um segundo proponente?</p>
            <div className={style.option}>
                 <input onClick={()=>{setSecondProponent(true)}} type="radio" name="secondProponent" id="secondProponentYes"/>
                <label className={style.box} htmlFor="secondProponentYes">
                    <img src={check} alt=""/>
                </label>
                <p>Sim</p>
            </div>
            <div className={style.option}>
                 <input onClick={()=>{setSecondProponent(false)}} type="radio" name="secondProponent" id="secondProponentNo"/>
                <label className={style.box} htmlFor="secondProponentNo">
                    <img src={check} alt=""/>
                </label>
                <p>Não</p>
            </div>

            {secondProponent && (
            <>
            <div className={style.item}>
                <label htmlFor="secondProponetNome">Nome do segundo proponente:</label>
                <input value={inputSecondProponentName} onChange={(e)=>{setInputSecondProponentName(e.target.value)}} name='secondProponentNome' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentCPF">CPF do segundo proponente:</label>
                <input value={inputSecondProponentCPF} onChange={(e)=>{setInputSecondProponentCPF(e.target.value)}} name='secondProponentCPF' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentTelefone">Telefone do segundo proponente:</label>
                <input value={inputSecondProponentTel} onChange={(e)=>{setInputSecondProponentTel(e.target.value)}} name='secondProponentTelefone' type="tel"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentEmail">Email do segundo proponente:</label>
                <input value={inputSecondProponentEmail} onChange={(e)=>{setInputSecondProponentEmail(e.target.value)}} name='secondProponentEmail' type="email"/>
            </div>

            <p className={style.legend}>Informe o endereço do segundo proponente:</p>

            <div className={style.item}>
                <label htmlFor="secondProponentCEP">CEP:</label>
                <input value={inputSecondProponentCEP} onChange={(e)=>{setInputSecondProponentCEP(e.target.value)}} name='secondProponentCEP' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentRua">Rua:</label>
                <input value={inputSecondProponentStreet} onChange={(e)=>{setInputSecondProponentStreet(e.target.value)}} name='SecondProponentRua' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentNumero">Número:</label>
                <input value={inputSecondProponentNumber} onChange={(e)=>{setInputSecondProponentNumber(e.target.value)}} name='secondProponentNumero' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentBairro">Bairro:</label>
                <input value={inputSecondProponentNeighborhood} onChange={(e)=>{setInputSecondProponentNeighborhood(e.target.value)}} name='secondProponentBairro' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentCidade">Cidade:</label>
                <input value={inputSecondProponentCity} onChange={(e)=>{setInputSecondProponentCity(e.target.value)}} name='secondProponentCidade' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="secondProponentEstado">Estado:</label>
                <input value={inputSecondProponentState} onChange={(e)=>{setInputSecondProponentState(e.target.value)}} name='secondProponentEstado' type="text"/>
            </div>


            <p className={style.legend}>Essa operação terá um terceiro proponente?</p>
            <div className={style.option}>
                 <input onClick={()=>{setThirdProponent(true)}} type="radio" name="thirdProponent" id="thirdProponentYes"/>
                <label className={style.box} htmlFor="thirdProponentYes">
                    <img src={check} alt=""/>
                </label>
                <p>Sim</p>
            </div>
            <div className={style.option}>
                <input onClick={()=>{setThirdProponent(false)}} type="radio" name="thirdProponent" id="thirdProponentNo"/>
                <label className={style.box} htmlFor="thirdProponentNo">
                    <img src={check} alt=""/>
                </label>
                <p>Não</p>
            </div>
            </>)}

            {thirdProponent && (
            <>
            <div className={style.item}>
                <label htmlFor="thirdProponetNome">Nome do terceiro proponente:</label>
                <input value={inputThirdProponentName} onChange={(e)=>{setInputThirdProponentName(e.target.value)}} name='thirdProponentNome' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentCPF">CPF do terceiro proponente:</label>
                <input value={inputThirdProponentCPF} onChange={(e)=>{setInputThirdProponentCPF(e.target.value)}} name='thirdProponentCPF' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentTelefone">Telefone do terceiro proponente:</label>
                <input value={inputThirdProponentTel} onChange={(e)=>{setInputThirdProponentTel(e.target.value)}} name='thirdProponentTelefone' type="tel"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentEmail">Email do terceiro proponente:</label>
                <input value={inputThirdProponentEmail} onChange={(e)=>{setInputThirdProponentEmail(e.target.value)}} name='thirdProponentEmail' type="email"/>
            </div>

            <p className={style.legend}>Informe o endereço do terceiro proponente:</p>

            <div className={style.item}>
                <label htmlFor="thirdProponentCEP">CEP:</label>
                <input value={inputThirdProponentCEP} onChange={(e)=>{setInputThirdProponentCEP(e.target.value)}} name='thirdProponentCEP' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentRua">Rua:</label>
                <input value={inputThirdProponentStreet} onChange={(e)=>{setInputThirdProponentStreet(e.target.value)}} name='thirdProponentRua' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentNumero">Número:</label>
                <input value={inputThirdProponentNumber} onChange={(e)=>{setInputThirdProponentNumber(e.target.value)}} name='thirdProponentNumero' type="number"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentBairro">Bairro:</label>
                <input value={inputThirdProponentNeighborhood} onChange={(e)=>{setInputThirdProponentNeighborhood(e.target.value)}} name='thirdProponentBairro' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentCidade">Cidade:</label>
                <input value={inputThirdProponentCity} onChange={(e)=>{setInputThirdProponentCity(e.target.value)}} name='thirdProponentCidade' type="text"/>
            </div>

            <div className={style.item}>
                <label htmlFor="thirdProponentEstado">Estado:</label>
                <input value={inputThirdProponentState} onChange={(e)=>{setInputThirdProponentState(e.target.value)}} name='thirdProponentEstado' type="text"/>
            </div>
            </>)}


            <p className={style.legend}>Anexo de documentos:</p>

            

            <p className={style.legend}>RG ou CNH:</p>
            <div className={style.option}>
                <input onClick={()=>{setIncludeLatterRG(!includeLatterRG)}} type="checkbox" name="latter1" id="latter1"/>
                <label className={style.box} htmlFor="latter1">
                    <img src={check} alt=""/>
                </label>
                <p>Anexar depois</p>
            </div>
            {includeLatterRG && (
                <div className={style.file}>
                <input onChange={(e)=>{setFileRG(e.target.files[0])}} type="file" value="" id='fileRG'/>
                <label htmlFor="fileRG">Anexar documento</label>
                {fileRG && (
                <>
                    <p className={style.title}>Documento selecionado:</p>
                    <div className={style.doc}>
                        <img src={doc} alt=""/>
                        <p>{fileRG.name}</p>
                    </div>
                </>
                )}
            </div>
            )}
            

            <p className={style.legend}>Matrícula do imóvel ou documento que comprove a propriedade:</p>
            <div className={style.option}>
                <input onClick={()=>{setIncludeLatterProperty(!includeLatterProperty)}} type="checkbox" name="latter2" id="latter2"/>
                <label className={style.box} htmlFor="latter2">
                    <img src={check} alt=""/>
                </label>
                <p>Anexar depois</p>
            </div>
            {includeLatterProperty && (
                <div className={style.file}>
                <input onChange={(e)=>{setFilePropertyDoc(e.target.files[0])}} type="file" value="" id='propertyDoc'/>
                <label htmlFor="propertyDoc">Anexar documento</label>
                {filePropertyDoc && (
                <>
                    <p className={style.title}>Documento selecionado:</p>
                    <div className={style.doc}>
                        <img src={doc} alt=""/>
                        <p>{filePropertyDoc.name}</p>
                    </div>
                </>
                )}
            </div>
            )}

            
            
            <p className={style.legend}>Documento de renda:</p>
            <div className={style.option}>
                <input onClick={()=>{setIncludeLatterRent(!includeLatterRent)}} type="checkbox" name="latter3" id="latter3"/>
                <label className={style.box} htmlFor="latter3">
                    <img src={check} alt=""/>
                </label>
                <p>Anexar depois</p>
            </div>
            {includeLatterRent && (
                <div className={style.file}>
                <input multiple onChange={(e)=>{setFileRentDoc(Array.from(e.target.files))}} type="file" value="" id='rentDoc'/>
                <label htmlFor="rentDoc">Anexar documento</label>
                {fileRentDoc.length > 0 && (
                <>
                    <p className={style.title}>Documentos selecionados:</p>
                    <ul>
                        {fileRentDoc.map((file, index) => (
                            <li key={index}>
                                <img src={doc} alt="" />
                                <p>{file.name}</p>
                            </li>
                        ))}
                    </ul>
                </>)}
            </div>
            )}

            <button onClick={sendProposal} className={style.send}>Enviar Proposta</button>
        </form>
        </div>
        </>)}
        
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