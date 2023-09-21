import './Item.css';

import {Component} from "react";
import {AiOutlineDelete} from "react-icons/ai";

export class Item extends Component {
    render() {
        return (
            <li className={'Item'}>
                <input type={'checkbox'}/>
                <p>Tekst</p>
                <AiOutlineDelete className={'deleteButton'}/>
            </li>
        );
    }
}
