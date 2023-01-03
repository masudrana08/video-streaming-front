import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from './myNav.module.css'
import { BsYoutube } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
export default function MyNav() {
  return (
    <div >
      <div>
         <BsYoutube /> FooTube
      </div>
      <div>
         <input placeholder="Search" type="text" />
         <button>
            <BiSearchAlt />
         </button>
      </div>
      <div>
         <div>
            <RiVideoAddFill />
         </div>
         <div>
            <MdNotifications />
         </div>
         <div>
            <CgProfile />
         </div>
      </div>
    </div>
  );
}
