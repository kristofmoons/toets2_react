import './App.css';
import {MenuProduct} from "./components/MenuProduct";
import {PRODUCTS_DATA} from "./data/data";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            {PRODUCTS_DATA.map(p => <MenuProduct product={p}/>)}
        </div>
    );
}

export default App;
