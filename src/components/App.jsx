import { Routes, Route, } from 'react-router-dom';
import HomePageView from '../View/HomePageView';
import ListView from '../View/ListView';

function App () {
    return (
        <>
        <div className='App'>
            <Routes>
                <Route path = "/HomePageView" element = {<HomePageView/>} />
                <Route path = "/" element = {< ListView/>}/>
            </Routes>
        </div>
        </>
    )
}
export default App;