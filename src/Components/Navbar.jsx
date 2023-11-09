import {navLinks, socialLinks} from "../data.jsx";
import {FaBars, FaGithubSquare, FaLinkedin, FaTwitter} from "react-icons/fa";
import logo from "../assets/svg/logo-color.svg";
import {useState,useRef} from "react";
import {motion} from "framer-motion";


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);



    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    const linkStyles = {
        height:showLinks ? `{linksRef.current.getBoundingClientReact().height}px` : '0px',
    }


    return (
        <nav>
            <div className={'nav-center'}>
                <div className={'nav-header'}>
                    <img className={'w-20 h-24'} src={logo} alt={'logo'} />
                    <button className={'nav-toggle'} onClick={toggleLinks}>
                        <FaBars/>
                    </button>
                </div>

                <div className='links-container'
                     ref={linksContainerRef}
                     style={linkStyles}
                >
                    <ul className={'links'} ref={linksRef}>
                        {navLinks.map((link) => {
                            return(
                                <li key={link.id}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <ul className={'social-icons'}>
                    {socialLinks.map((link) => {
                        const {id, href, icon} = link;
                        return(
                            <li key={id}>
                                <a  href={href}>
                                    {icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
