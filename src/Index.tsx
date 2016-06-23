import React = require('react');
import ReactDOM = require('react-dom');
import Counter from "./Counter";
import store from "./Store";

function render() {
    ReactDOM.render(
        <Counter value={store.getState()} dispatch={store.dispatch} />,
        document.getElementById('app')
    )
}

render();
store.subscribe(render);