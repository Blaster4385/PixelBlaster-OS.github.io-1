import React from 'react'
import { useState } from "react";

const List = props => {
    const [list, setList] = useState(props.data);
    return (
        
        <ul>
            <ul>
                {list.length > 0 && list.map((item) => <li>{item} </li>)}

            </ul>
        </ul>

    )
}

export default List