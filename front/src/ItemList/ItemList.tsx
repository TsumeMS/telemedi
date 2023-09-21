import './ItemList.css';

import {Component, useState, useEffect} from "react";
import Api from "../API/Api";

export default class ItemList extends Component {
    private readonly apiClient: Api = new Api();

    render() {
        this.apiClient.getList().then(response => console.log(response))
        return (
            <ul className={'ItemList'}>

            </ul>
        );
    }
}
