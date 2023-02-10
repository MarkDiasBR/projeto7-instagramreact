export default function Usuario() {
    return (
        <div class="usuario">
            <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong data-test="name">catanacomics</strong>
                    <ion-icon data-test="edit-name" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}