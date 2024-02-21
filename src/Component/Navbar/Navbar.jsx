import React from "react";
import "./Navbar.scss";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineNoteAlt } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export const Navbar = ({ sideBar, sideBarNav }) => {
  return (
    <div className="nav-menu">
      <div className="wrapper">
        <h1>Hello Michael!</h1>
        <div
          className={`hamburger-menu ${sideBar ? "open" : ""}`}
          onClick={sideBarNav}
        >
          <AiOutlineMenuUnfold />
        </div>

        <div className="input-text">
          <div className="input">
            <IoIosSearch className="icon" />
            <input
              type="text"
              placeholder="Search"
              required
              autoComplete="off"
            />
          </div>

          <div className="note-icon">
            <div className="item">
              <MdOutlineNoteAlt className="icon" />
            </div>

            <div className="item">
              <IoNotificationsOutline className="icon" />
              <p></p>
            </div>

            <div className="profile">
              <img
                src="https://media.istockphoto.com/id/1323990939/photo/a-studio-portrait-of-a-young-millennial-woman.webp?b=1&s=170667a&w=0&k=20&c=YcKfu01ftZLhv9DnHK2ARHSBxqOB1XgtCHbrAVzKkmg="
                alt="profile"
              />
              <IoIosArrowDown className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
