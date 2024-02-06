import './HomePage.css'


function HomePage() {

    const containerRef = useRef(null);

    useEffect(() => {
    
        if (containerRef.current) {
            containerRef.current.classList.add("loaded");
        }
        return () => {
            if (containerRef.current) {
                containerRef.current.classList.remove("loaded");
            }
        };
    }, []); 

    return (
        
        <>
        <div className="container" id="mainContainer">

            <nav className="navBar">

                <a href="index.html">
                    <img className="link" id="logo" src="images/logo.svg" alt="logo" />
                </a>

                <div className="iconHolder">

                    <div className="homeIcon">
                        <img className="icon" src="images/home-mobile-ui-svgrepo-com.svg" alt="icon-home" />
                        <h3> <a className="link" href="index.html">Home</a> </h3>
                    </div>

                    <div className="helpIcon">
                        <img className="icon" src="images/help-circle-svgrepo-com.svg" alt="icon-help" />
                        <h3> <a className="link" href="#">Help</a> </h3>
                    </div>

                </div>

            </nav>


            <main className="mainContent">

                <div className="textHolder">
                    <h2 className="tipeSchool">Escuela de baile</h2>
                    <h1 className="nameSchool">Lola Flores</h1>
                </div>

                <div className="btnHolder">

                    <a href="../page2/index.html" target="_blank">
                        <button className="btn Access">Acceso a Listas</button>
                    </a>

                    <button className="btn Other">Otros Trámites</button>

                </div>

            </main>

        </div>
        </>
    )

}

export default HomePage