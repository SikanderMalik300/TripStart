import { FaHome, FaInfoCircle, FaTools, FaEnvelope } from 'react-icons/fa';


export const MenuItems = [
    {
        title : "Home",
        url : "/",
        icon : <FaHome />, // Use the actual component, not a string
        cName : "nav-links"
    },
    {
        title : "About",
        url : "/about",
        icon : <FaInfoCircle />, // Use the actual component, not a string
        cName : "nav-links"
    },
    {
        title : "Service",
        url : "/service",
        icon : <FaTools />, // Use the actual component, not a string
        cName : "nav-links"
    },
    {
        title : "Contact",
        url : "/contact",
        icon : <FaEnvelope />, // Use the actual component, not a string
        cName : "nav-links"
    }
]
