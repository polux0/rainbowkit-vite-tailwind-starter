import YourSvg from "./assets/noun-settings-pixel-art-2758641.svg";
import usdcSvg from "./assets/usdc-logo-svg.svg"
import dropDownSvg from "./assets/dropdown-indicator.svg"
import React from "react";
import { createPopper } from "@popperjs/core";

function App() {

  // technical debt - convert styles to tailwind;
  const backgroundColor = "#1A1B23";
  const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  };
  const color = "white";
  const backgroundColor1 = "yellow";
  
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const buttonDropdownRef: any = React.createRef();
  const popoverDropdownRef: any = React.createRef();
  const openDropdownPopover = () => {
    createPopper(buttonDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    
    <div className="h-screen bg-black p-6" style={{backgroundColor}}>

      {/* AnotherDropdown menu */}
      {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
            </div>
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
            </div>
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
            </div>
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
            </div>
          </div>
          </div> */}

      <div className="h-3/5 w-2/6 bg-white rounded-3xl p-6">
        <div className = "w-full h-1/6">
          <button className="float-right"><img src={YourSvg}></img></button>
        </div>
        {/* Swap */}
        <div className="flex flex-col justify-center items-center space-y-2 h-2/3">
          <div className="flex justify-center items-center w-5/6 h-2/6 rounded-2xl" style={{backgroundColor}}>
              <input className="w-2/3 h-2/3 text-4xl text-white p-4 focus:outline-0" style={{backgroundColor}}></input>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img className="float-right"src={usdcSvg}></img></button>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown" onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
              ><img src={dropDownSvg} style={imageStyle}></img></button>
          </div>
          <div className="flex justify-center items-center w-5/6 h-2/6 rounded-2xl" style={{backgroundColor}}>
              <input className="w-2/3 h-2/3 text-4xl text-white p-4 focus:outline-0" style={{backgroundColor}}></input>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img className="float-right"src={usdcSvg}></img></button>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img src={dropDownSvg} style={imageStyle}></img></button>
              {/* Dropdown menu */}
              {/* Was before */}
              <div id="dropdown" ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + (color === "white" ? "bg-white " : backgroundColor1 + " ") +
                "absolute text-base z-10 float-right w-1/5 py-2 list-none text-left rounded shadow-lg mt-1"
              }>
              {/* <div id="dropdown" ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + (color === "white" ? "bg-white " : backgroundColor1 + " ") +
                "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              }> */}
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
          </div>
          </div>
          <div className="w-5/6 h-2/6 rounded-2xl border-4 border-black border-solid">
            <button className="w-full bg-white h-full rounded-2xl">Swap</button>
        </div>
        </div>
      </div>
    </div>
    
    // Dropdown
    
  );
}

export default App;
