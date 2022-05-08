import Storie from "./corpo/Stories"
import Post from "./corpo/post"
import Sidebar from "./corpo/sidebar"



export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Storie />
                <Post />
            </div>
                <Sidebar />
        </div>
    )
}