import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion";
import "./navbar.scss"
const Navbar = () => {
    return <div className="navbar">
            {/*Sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                initial = {{opacity:0,scale:0.5}}
                animate = {{opacity:1,scale:1}}
                transition = {{duration:0.5}}>Pierce Hokia</motion.span>
            </div>
        </div>;
};

export default Navbar;