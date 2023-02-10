import postsArray from "./PostsArray";
import Post from "./Post";

export default function Posts() {
    return (
        <div class="posts">
            {postsArray.map((story) => <Post urlUsuario={story.urlUsuario} usuario={story.usuario} urlConteudo={story.urlConteudo} urlUsuarioQueCurtiu={story.urlUsuarioQueCurtiu} usuarioQueCurtiu={story.usuarioQueCurtiu} curtidas={story.curtidas}/>)}
        </div>
    )
}