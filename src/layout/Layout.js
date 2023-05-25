import React from "react";
import Navigation from "./Navigation";
import "./styles/Layout.css";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
