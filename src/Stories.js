import storiesArray from "./StoriesArray";
import Story from "./Story";

export default function Stories() {
    return (
        <div class="stories">

            {storiesArray.map((story) => <Story url={story.url} usuario={story.usuario}/>)}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}