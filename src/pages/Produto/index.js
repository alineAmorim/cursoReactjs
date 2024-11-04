import * as React from 'react';
import { useParams } from "react-router-dom";
import './style.css';
// import '../../../public/lib/style.css'



function Produto() {
    let { id } = useParams();
    return (
        <>
            <div className='content'>
                <h1>Produto</h1>
                <p>#{id}</p>
            </div>
        </>
    )
}

export default Produto;