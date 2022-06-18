import React from 'react'
import List from './List';
import { useState } from "react";
import { Link } from 'react-router-dom'


const Header = props => {
    const [list, setList] = useState(props.data);
    return (
        <div>
            <header id="header">
                <div className="logo"> <span className="icon fa-gem"></span> </div>
                <div className="content">
                    <div className="inner">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
                <nav>
                <List data={list} />
                </nav>
            </header>
        </div>
    )
}

export default Header