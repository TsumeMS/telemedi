import React, {Component} from 'react';
import './App.css';
import AddItem from "../AddItem/AddItem";
import ItemList from "../ItemList/ItemList";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>To Do List</h2>
                </header>
                <AddItem />
                <ItemList />
            </div>
        );
    }
}
