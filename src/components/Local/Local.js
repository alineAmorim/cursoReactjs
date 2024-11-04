// function Local({cidade, estado}) {
//     return (
//         <div>Cidade: {cidade} / {estado}</div>
//     );

// }
function Local(item) {
    return (
        <div>Cidade: {item.cidade} / {item.estado}</div>
    );

}

export default Local;