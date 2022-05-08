const storiesImages = [{
    link: "img/9gag.svg",
    title: "9gag"
},
{
    link: "img/meowed.svg",
    title: "meowed"
},
{
    link: "img/barked.svg",
    title: "barked"
},
{
    link: "img/nathanwpylestrangeplanet.svg",
    title: "nathanwpylestrangeplanet"
},
{
    link: "img/wawawicomics.svg",
    title: "wawawicomics"
},
{
    link: "img/respondeai.svg",
    title: "respondeai"
},
{
    link: "img/filomoderna.svg",
    title: "filomoderna"
},
{
    link: "img/memeriagourmet.svg",
    title: "memeriagourmet"
},
]

function StoriesHtml(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.src} alt="imagem-storie" />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}


export default function Storie() {
    return (
        <div class="stories">
            {storiesImages.map((storie) => <StoriesHtml src={storie.link} name={storie.title} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}