const posts = [
    {
        userImage: "img/meowed.svg",
        userName: "meowed",
        postImage: "img/gato-telefone.svg",
        userLike: "respondeai",
        userLikeImage: "img/respondeai.svg",
        numberLikes: "101.523"
    },
    {
        userImage: "img/barked.svg",
        userName: "barked",
        postImage: "img/dog.svg",
        userLike: "adorable_animals",
        userLikeImage: "img/adorable_animals.svg",
        numberLikes: "99.159"
    }
]

const icons = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline"
]

function Estrutura(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} alt="perfil do usuário" />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage} alt="imagem-post" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {icons.map((ico) => (
                            <ion-icon name={ico}></ion-icon>
                        ))}
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.userLikeImage} alt="teste" />
                    <div class="texto">
                        Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.numberLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Post() {
    return (
        <div class="posts">
            {posts.map((post) => (
                <Estrutura userImage={post.userImage} userName={post.userName} postImage={post.postImage} userLike={post.userLike} numberLikes={post.numberLikes} userLikeImage={post.userLikeImage} />
            ))}
        </div>
    )
}