
import Scrollspy from "react-scrollspy"
import Dot from "./dot"
import "./sideNavigation.css"

export const SideNavigation = () => {
    return (
        <div className="fixed nav">
            <Scrollspy items={ ['section-1', 'section-2'] } currentClassName="active">
                <li>
                    <Dot></Dot>                  
                    <a href="#section-1">Home</a>
                </li>
                <li>
                    <Dot></Dot>
                    <a href="#section-2">Introduction</a>  
                </li>
                <li>
                    <Dot></Dot>
                    <a href="#section-3">Experience</a>  
                </li>
                <li>
                    <Dot></Dot>
                    <a href="#section-4">Projects</a>  
                </li>
                <li>
                    <Dot></Dot>
                    <a href="#section-5">Contact</a>  
                </li>       
            </Scrollspy>
        </div>)
}