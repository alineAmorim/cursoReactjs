import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='content'>

            <h1>Home</h1>
            <Link to='produto/123' >Acessar produto #123</Link>
        </div>
    )
}

export default Home;