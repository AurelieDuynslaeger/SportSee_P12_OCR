import { BiSwim } from "react-icons/bi";
import { MdDirectionsBike } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";

import "../LeftNav/Leftnav.scss"
import IconSquare from "../IconSquare";


const LeftNav = () => {
  return (
    <nav className="left_nav">
        <div className="left_nav_links">
          <ul>
            <li><IconSquare icon={<BiSwim />} bgcolor="#FFFFFF" /></li>
            <li><IconSquare icon={<BiSwim />} bgcolor="#FFFFFF" /></li>
            <li><IconSquare icon={<MdDirectionsBike />} bgcolor="#FFFFFF" /></li>
            <li><IconSquare icon={<LuDumbbell />} bgcolor="#FFFFFF" /></li>
          </ul>
        </div>
    </nav>
  )
}

export default LeftNav