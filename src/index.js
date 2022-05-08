import ReactDOM from 'react-dom';

import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo"
import FundoMobile from "./components/Fundo"


function App() {
    return (
       <div>
           <Navbar />
           <Corpo />
           <FundoMobile />
       </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));