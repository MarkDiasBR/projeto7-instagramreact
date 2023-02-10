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
    
    return(
        <div data-test="post" class="post">
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
                <img src={props.urlConteudo} alt={props.altConteudo}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
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
                        Curtido por <strong>{props.usuarioQueCurtiu}</strong> e <strong>outras <span data-test="likes-number">{props.curtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}