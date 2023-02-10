import { useState } from "react"

export default function Post(props) {

    const VALOR_INICIAL_ICONE_SALVAR = "bookmark-outline"
    const [iconeSalvar, setIconeSalvar] = useState(VALOR_INICIAL_ICONE_SALVAR)

    function mudarIconeSalvar() {

        if (iconeSalvar === VALOR_INICIAL_ICONE_SALVAR) {
            setIconeSalvar("bookmark")
        } else {
            setIconeSalvar(VALOR_INICIAL_ICONE_SALVAR)
        }

    }
    
    const VALOR_INICIAL_CLASSES_POST = "post"
    const [classesPost, setClassesPost] = useState(VALOR_INICIAL_CLASSES_POST)

    const VALOR_INICIAL_ICONE_CORACAO = "heart-outline"
    const [iconeCoracao, setIconeCoracao] = useState(VALOR_INICIAL_ICONE_CORACAO)

    const VALOR_INICIAL_CURTIDAS = props.curtidas;
    const [curtidas, setCurtidas] = useState(VALOR_INICIAL_CURTIDAS) 

    function toggleCurtidasClassePost() {
        
        if (classesPost === "post") {
            setClassesPost("post post-curtido")
            setIconeCoracao("heart")
            alteraCurtidas(1)
        } else {
            setClassesPost(VALOR_INICIAL_CLASSES_POST)
            setIconeCoracao(VALOR_INICIAL_ICONE_CORACAO)
            alteraCurtidas()
        }

    }
    
    function addCurtidaClassesPost() {

        if (classesPost === "post") {
            setClassesPost("post post-curtido")
            setIconeCoracao("heart")
            alteraCurtidas(1)
        }
    }

    function alteraCurtidas(status = 0) {
        const numeroCurtidas = parseInt(VALOR_INICIAL_CURTIDAS.replace(".", ""))

        if (status === 1) {
            let novoNumeroCurtidas = numeroCurtidas + 1;
            novoNumeroCurtidas = novoNumeroCurtidas.toLocaleString('en-US').replace(/,/g, ".")
            setCurtidas(novoNumeroCurtidas)
        } else {
            setCurtidas(VALOR_INICIAL_CURTIDAS)
        }
        
    }

    return(
        <div data-test="post" className={classesPost}>
            <div class="topo">
                <div class="usuario">
                    <img data-test="post-image" src={props.urlUsuario} alt={props.usuario}/>
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <ion-icon name="heart"></ion-icon>
                <img onClick={addCurtidaClassesPost} src={props.urlConteudo} alt={props.altConteudo}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <div><ion-icon data-test="like-post" onClick={toggleCurtidasClassePost} name={iconeCoracao}></ion-icon>
                        </div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={mudarIconeSalvar} name={iconeSalvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.urlUsuarioQueCurtiu} alt={props.usuarioQueCurtiu}/>
                    <div class="texto">
                        Curtido por <strong>{props.usuarioQueCurtiu}</strong> e <strong>outras <span data-test="likes-number">{curtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}