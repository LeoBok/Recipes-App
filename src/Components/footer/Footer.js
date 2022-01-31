import { VscGithubInverted } from "react-icons/vsc";
import { FaPortrait } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import garlic from './garlic.png'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <h2>Contact me:</h2>
                <div className="footer">
                    
                    <div className="icn-cont">

                        <a href="https://leobok.github.io/my-portfolio/">
                            <FaPortrait className="icon" />
                        </a>

                        <a href="https://github.com/LeoBok">
                            <VscGithubInverted  className="icon" />
                        </a>

                        <a href="https://www.linkedin.com/in/leonardo-boccali-6b8a211a1/">
                            <BsLinkedin className="icon" />
                        </a>
                        
                    </div>
                    
                    <img
                        src={garlic}
                        className="garlic-img"
                        alt='a happy garlic'
                    />
                </div>
        </footer>
    )
}

export default Footer