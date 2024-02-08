
import { Link } from 'react-router-dom';


function Login() {
    return(
        <> 
        <h3>Hola, estás en la Login</h3>
        <button>
            <Link to= "/home">Home</Link>
        </button>
       
        </>
    )
}

export default Login;