import YourSvg from "./assets/noun-settings-pixel-art-2758641.svg";
import usdcSvg from "./assets/usdc-logo-svg.svg"
import usdcDarkSvg from "./assets/usdc-logo-dark-svg.svg"
import dropDownSvg from "./assets/dropdown-indicator.svg"
import React from "react";
import { createPopper } from "@popperjs/core";

function App() {

  // technical debt:
  // convert styles to tailwind;
  // popoverDropdownRef has position absolute and huge margins - see if there is better way of approaching this
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
              <div id="dropdown" ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + (color === "white" ? "bg-white " : backgroundColor1 + " ") +
                "absolute text-base z-10 float-right w-1/6 py-2 list-none text-center rounded-2xl border-4 border-black border-solid shadow-lg mt-40 ml-36"
              }>
                <h3>Choose token</h3>
                <div className="flex flex-col py-2 text-sm dark:text-gray-400 p-5">
                  <div className="flex justify-center items-center w-6/6 h-1/9 p-2 rounded-2xl border-2 border-gray hover:text-black hover:border-black border-solid mb-2.5 bg-white">
                    <button className="w-1/4"><img src={usdcDarkSvg}></img></button>
                    <div className="w-3/4 float-left mr-9"> $FRAX </div>
                  </div>
                  <div className="flex justify-center items-center w-6/6 h-1/9 p-2 rounded-2xl border-2 border-gray hover:text-black hover:border-black border-solid mb-2.5 bg-white">
                    <button className="w-1/4"><img src={usdcDarkSvg}></img></button>
                    <div className="w-3/4 float-left mr-9"> $USDC </div>
                  </div>
                  <div className="flex justify-center items-center w-6/6 h-1/9 p-2 rounded-2xl border-2 border-gray hover:text-black hover:border-black border-solid mb-2.5 bg-white">
                    <button className="w-1/4"><img src={usdcDarkSvg}></img></button>
                    <div className="w-3/4 float-left mr-9"> $USDT </div>
                  </div>
                </div>
          </div>
          </div>
          <div className="w-5/6 h-2/6 rounded-2xl border-4 border-black border-solid">
            <button className="w-full bg-white h-full rounded-2xl">Swap</button>
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
