import HomePageBtn from '../components/ButtonForList/HomePageBtn';
import NavBar from '../components/NavBar/NavBar';
import Title from '../components/Title/Title'
import './HomePageView.css'

function HomePageView(){
    return(
        <>
        <div className='homePageHolder'>
        <NavBar/>
        <Title/>
        <HomePageBtn/>
        </div>
        </>
    )
}

export default HomePageView;