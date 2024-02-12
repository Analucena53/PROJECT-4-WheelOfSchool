import './ButtonStyle.css'
import { Link } from 'react-router-dom';


function HomePageBtn() {

    return (

        <>
            <div className="btnHolder">


                <button className="btn" id='accesList'>
                    <Link to="/list">Listas</Link>
                </button>


                <button className="btn" id='wheel'>
                    <Link to="/wheel">Ruleta</Link>
                </button>

            </div>
        </>
    )

}

export default HomePageBtn