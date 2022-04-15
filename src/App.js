import './App.css';

function MenuProduct(props) {
    const {productName} = props;
    return <div>{productName}</div>;
}

function App() {
    return (
        <div>
            <h1>Menu</h1>
            <MenuProduct productName="cola"/>
            <MenuProduct productName="water"/>
            <MenuProduct productName="bier"/>
            <MenuProduct productName="wijn"/>
        </div>
    );
}

export default App;
