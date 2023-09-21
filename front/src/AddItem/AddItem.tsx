import './AddItem.css';

import {Component, useState, useEffect} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import Api from "../API/Api";

export default class AddItem extends Component {
    private apiClient: Api = new Api();
    private content: string = '';

    public render() {
        return (
            <div className={'AddItem'}>
                <input type={'text'}
                       name={'toDoNewItem'}
                       placeholder={'New item content'}
                />
                <AiOutlinePlus className={'addButton'} onClick={this.addItem}/>
            </div>
        );
    }

    private addItem() {
        this.apiClient.addItem()
    }
}
