export default function Post(props) {
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.urlUsuario} alt={props.usuario}/>
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
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.urlUsuarioQueCurtiu} alt={props.usuarioQueCurtiu}/>
                    <div class="texto">
                        Curtido por <strong>{props.usuarioQueCurtiu}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}