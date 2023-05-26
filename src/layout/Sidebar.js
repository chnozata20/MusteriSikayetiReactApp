import React, { useEffect, useState } from "react";
import "./styles/Sidebar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import ex from "../assets/ex2.png";
import main_ico from "../assets/home.png";

import leftArrow from "../assets/left-arrow-sidebar.png";
import rightArrow from "../assets/right-arrow-sidebar.png";

import en from "../locales/en.json";
import tr from "../locales/tr.json";

export default function Sidebar({ children }) {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(true);
  const [local, setLocal] = useState(localStorage.getItem("language"));
  const [langFile, setLangFile] = useState(local === "English" ? en : tr);
  const [activePage, setActivePage] = useState("main-side");
  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  useEffect(() => {
    if (sideBar) {
      setActivePage(activePage.substring(0, activePage.length - 5));
    } else {
      setActivePage(activePage.concat("-side"));
    }
  }, [sideBar]);

  useEffect(() => {
    setLangFile(local === "English" ? en : tr);
    localStorage.setItem("language", local);
  }, [local]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexdirection: "row",
        }}
      >
        <div
          className={
            sideBar === true
              ? "main-page-style-2"
              : "main-page-style-2 main-page-style-2-side"
          }
        >
          <div className="logo-main">
            <img alt="experilabs" src={logo} style={{ width: "70%" }}></img>
          </div>

          <h6 className="h7-style">{langFile.pages.Main.sidebarHeader1}</h6>

          <button
            className={
              "button-main-1 " +
              (activePage === "main" ? " button-main-1-active" : "")
            }
            onClick={() => {
              setActivePage("main");
              navigate("/main");
            }}
          >
            <img
              alt="main"
              style={{
                width: "7%",
                marginRight: "0.5rem",
                filter: "invert(100%)",
                WebkitFilter: "invert(100%)",
              }}
              src={main_ico}
            ></img>
            {langFile.pages.Main.sidebar_main_page}
          </button>

          <button
            className={
              "button-main-1 " +
              (activePage === "anotherPage" ? " button-main-1-active" : "")
            }
            onClick={() => {
              setActivePage("anotherPage");
              navigate("/main");
            }}
          >
            <img
              alt="main"
              style={{
                width: "7%",
                marginRight: "0.5rem",
                filter: "invert(100%)",
                WebkitFilter: "invert(100%)",
              }}
              src={main_ico}
            ></img>
            {langFile.pages.Main.sidebar_another_page}
          </button>
          <button
            className={
              sideBar === true ? "arrow-button-left" : "arrow-button-right"
            }
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            <img
              alt="main"
              style={{
                width: "16%",
                filter: "invert(15%)",
                WebkitFilter: "invert(15%)",
              }}
              src={sideBar === true ? leftArrow : rightArrow}
            ></img>
          </button>
        </div>
        <div
          className={
            sideBar === false
              ? "main-page-style-2-close"
              : "main-page-style-2-close main-page-style-2-close-side"
          }
        >
          <div className="logo-main">
            <img
              alt="experilabs"
              src={ex}
              style={{
                width: "50%",
              }}
            ></img>
          </div>

          <button
            className={"button-main-1".concat(
              activePage === "main-side" ? " button-main-1-active" : ""
            )}
            onClick={() => {
              setActivePage("main-side");
              navigate("/main");
            }}
          >
            <img
              alt="main"
              style={{
                width: "50%",
                filter: "invert(100%)",
                WebkitFilter: "invert(100%)",
              }}
              src={main_ico}
            ></img>
          </button>
          <button
            className={"button-main-1".concat(
              activePage === "anotherPage-side" ? " button-main-1-active" : ""
            )}
            onClick={() => {
              setActivePage("anotherPage-side");
              navigate("/main");
            }}
          >
            <img
              alt="main"
              style={{
                width: "50%",
                filter: "invert(100%)",
                WebkitFilter: "invert(100%)",
              }}
              src={main_ico}
            ></img>
          </button>

          <button
            className={
              sideBar === true ? "arrow-button-left" : "arrow-button-right"
            }
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            <img
              alt="main"
              style={{
                width: "60%",
                filter: "invert(15%)",
                WebkitFilter: "invert(15%)",
              }}
              src={sideBar === true ? leftArrow : rightArrow}
            ></img>
          </button>
        </div>

        <div
          className={
            sideBar === true
              ? "main-page-style main-page-style-side"
              : "main-page-style"
          }
        >
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
