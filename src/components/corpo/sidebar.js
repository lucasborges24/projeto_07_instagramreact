const userInfo = [{
    userName: "Catana",
    profile: "catanacomics",
    image: "img/catanacomics.svg"
}]

const sugestao = [
    {
        link: "img/bad.vibes.memes.svg",
        profile: "bad.vibes.memes",
        status: "Segue você"
    },
    {
        link: "img/chibirdart.svg",
        profile: "chibirdart",
        status: "Segue você"
    },
    {
        link: "img/razoesparaacreditar.svg",
        profile: "razoesparaacreditar",
        status: "Novo no Instagram"
    },
    {
        link: "img/adorable_animals.svg",
        profile: "adorable_animals",
        status: "Segue você"
    },
    {
        link: "img/smallcutecats.svg",
        profile: "smallcutecats",
        status: "Segue você"
    },
]


function Usuario(props) {

    return (
        <div class="usuario">
            <img src={props.image} alt="teste" />
            <div class="texto">
                <strong>{props.profile}</strong>
                {props.name}
            </div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.link} alt="imagenzinha" />
                <div class="texto">
                    <div class="nome">{props.profile}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>

    )
}


export default function Sidebar() {
    return (
        <div class="sidebar">
            {userInfo.map((info) => (
                <Usuario image={info.image} profile={info.profile} name={info.userName} />
            ))}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestao.map((info) => (
                    <Sugestao link={info.link} profile={info.profile} status={info.status} />
                ))}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}