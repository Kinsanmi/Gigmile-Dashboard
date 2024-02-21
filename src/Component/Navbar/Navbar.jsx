import React from "react";
import "./Navbar.scss";
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
            <svg className="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"  />
            </svg>
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
