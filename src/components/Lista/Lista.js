import { useState } from "react";

function Lista({ itens }) {
    // function removeItem(e) {
        // itens.filter((i, index) => (
            // (i === e.target.value ? itens.splice(index, 1) : '')
// 
        // ))
    // }
    // setTarefas([...itens, 'oi'])
    const [estaLista, setEstaLista] = useState([itens]);
    // console.log(itens)
    // setTeste([...itens])

    return (
        <div>
            {itens.length ? (<h4>Lista de tarefas</h4>) : ''}
            <ul>
                {itens.map(
                    (item, index) => (
                        // <li key={item}>{item} <button type="button" value={item} onClick={removeItem}>Remover</button></li>
                        <li key={index}>{item} <button type="button" value={item} onClick={() => setEstaLista(itens.splice(index, 1))}>Remover</button></li>
                    )
                )}
            </ul>
           
        </div>
    )
}

export default Lista;