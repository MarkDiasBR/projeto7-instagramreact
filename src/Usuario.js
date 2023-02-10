import { useState } from 'react'

export default function Usuario() {
    const [usuario, setUsuario] = useState("catanacomics");
    const [urlFoto, setUrlFoto] = useState("assets/img/catanacomics.svg")

    function mudarUsuario() {
        
        const novoUsuario = prompt("Digite o nome do novo usuário")
        const novaUrlFoto = prompt("Digite a URL da nova foto")
        const falsy = [null, NaN, undefined, false, ""]

        if ( !( falsy.includes(novoUsuario) ) || !( falsy.includes(novaUrlFoto) ) ) {
            setUsuario(novoUsuario)
            setUrlFoto(novaUrlFoto) 
        }
    }

    return (
        <div class="usuario">
            <img data-test="profile-image" src={urlFoto} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{usuario}</strong>
                    <ion-icon onClick={mudarUsuario} data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}