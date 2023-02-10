import sugestoesArray from "./SugestoesArray";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoesArray.map((sugestao) => <Sugestao url={sugestao.url} usuario={sugestao.usuario} razao={sugestao.razao} />)}
        </div>

    )
}