import { Routes, Route, } from 'react-router-dom';
import LoginView from '../View/LoginView';
import HomePageView from '../View/HomePageView';
import ListView from '../View/ListView';
import HelpView from '../View/HelpView';
import WheelView from '../View/WheelView';

function App () {
    return (
        <>
        <div className='App'>
            <Routes>
                <Route path = "/" element = {< LoginView/>}/>
                <Route path = "/home" element = {<HomePageView/>} />
                <Route path = "/list" element = {<ListView/>} />
                <Route path = "/help" element = {<HelpView/>} />
                <Route path = "/wheel" element = {< WheelView/>} />
            </Routes>
        </div>
        </>
    )
}
export default App;