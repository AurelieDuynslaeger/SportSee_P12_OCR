import { BiSwim } from "react-icons/bi";
import { MdDirectionsBike } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";
import { GiMeditation } from "react-icons/gi";

import "../LeftNav/Leftnav.scss"
import IconSquare from "../IconSquare";

/**
 * représente la barre de navigation latérale avec des icônes pour les activités.
 * 
 * @returns {React.Element} Le composant LeftNav.
 */


const LeftNav = () => {
  return (
    <nav className="left_nav">
        <div className="left_nav_links">
          <ul>
            <li><IconSquare icon={<GiMeditation />} iconColor="#ff0101" bgcolor="#FFFFFF" /></li>
            <li><IconSquare icon={<BiSwim />} iconColor="#ff0101" bgcolor="#FFFFFF" /></li>
            <li><IconSquare icon={<MdDirectionsBike />} iconColor="#ff0101" bgcolor="#FFFFFF" /></li>
            <li><IconSquare icon={<LuDumbbell />} iconColor="#ff0101" bgcolor="#FFFFFF" /></li>
          </ul>
        </div>
    </nav>
  )
}

export default LeftNav