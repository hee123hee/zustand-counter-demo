import './App.css'
import counterStore from "./stores/counterStore.jsx";

function App() {
    const {count, increase, increaseBy, decrease, decreaseBy, reset} = counterStore();
    return (
        <div className="app">
            <div className="container">
                <div className="title">Counter App</div>
                <h1 className="count">count:{count}</h1>

                <div className="button-group">
                    <button onClick={() => decreaseBy(20)}>20씩 감소(-)</button>
                    <button onClick={decrease}>1씩 감소(-)</button>
                    <button onClick={increase}>1씩 증가(+)</button>
                    <button onClick={() => increaseBy(20)}>10씩증가(+)</button>
                </div>
                <button className="resetBtn" onClick={reset}>RESET</button>
            </div>
        </div>
    )
}

export default App
