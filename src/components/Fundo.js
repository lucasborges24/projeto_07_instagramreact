const icones = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline"
]

export default function FundoMobile() {
    return (
        <div class="fundo-mobile">
           {icones.map((icone) => (
               <ion-icon name={icone}></ion-icon>
           ))}
        </div>
    )
}