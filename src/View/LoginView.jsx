import Login from "../components/Login/Login";
import Title from "../components/Title/Title";
import './loginView.css';

function LoginView(){
    return(
        <div className="login-view">
            <Title/>
            <Login/>
        </div>
    )
}

export default LoginView;

export function changeOpacity() { }
