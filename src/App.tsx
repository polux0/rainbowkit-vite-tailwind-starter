import settingsSvg from "./assets/noun-settings-pixel-art-2758641.svg";
import usdcSvg from "./assets/usdc-logo-svg.svg"
import usdcDarkSvg from "./assets/usdc-logo-dark-svg.svg"
import dropDownSvg from "./assets/dropdown-indicator.svg"
import informationIndicatorWhite from "./assets/information-indicator-white.svg"
import agencyLogoSvg from "./assets/agency-logo.svg";
import roadmapSvg from "./assets/roadmapicon-svg.svg";
import statsSvg from "./assets/stats-icon-svg.svg";
import userWalletMobileScreenSvg from "./assets/user-wallet-small-screen-svg.svg";
import React from "react";
import { createPopper } from "@popperjs/core";

function App() {

  // technical debt: 
  // 1. adapt styles / css for components
  // 2. add margin from swap modal that will be percentage of screen height
  // 3. introduce responsivness in modals ( select currency, additional trade info, settings )
  
  const backgroundColor = "#1A1B23";
  const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  };
  const exchangeContainerHeight = {height: "500px"};
  const color = "white";
  const backgroundColor1 = "yellow";
  const dynamicallMargin = {
    marginTop: "calc(100vh / 7)"
  }

  // const alignWithExchangeModal: ( screenWidth - exchangeModalWidth) / 2 = 375.5
  // const differenceBetweenExchangeModalAndLogoWidth:  ExchangeModalWidth - logoWidth = 572 - 289 = 283 / 2 ( to be centered ) = 141.5
  // const FinalMargin: alignWithExchangeModal+differenceBetweenExchangeModalAndLogoWidth
    
  
  // currencies dropdown
  const [currenciesDropdownPopoverShow, setCurrenciesDropdownPopoverShow] = React.useState(false);
  const currenciesButtonDropdownRef: any = React.createRef();
  const currenciesPopoverDropdownRef: any = React.createRef();
  // settings dropdown
  const [settingsDropdownPopoverShow, setSettingsDropdownPopoverShow] = React.useState(false);
  const settingsButtonDropdownPopoverShow: any = React.createRef();
  const settingsPopoverDropdownRef: any = React.createRef();
  // additional trade info dropdown
  const [additionalTradeInfoDropdownPopoverShow, setAdditionalTradeInfoDropdownPopoverShow] = React.useState(false);
  const additionalTradeInfoButtonDropdownPopoverShow: any = React.createRef();
  const additionalTradeInfoPopoverDropdownRef: any = React.createRef();

  // open currencies dropdown
  const openCurrenciesDropdownPopover = () => {
    createPopper(currenciesButtonDropdownRef.current, currenciesPopoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setCurrenciesDropdownPopoverShow(true);
  };
  // close currencies dropdown
  const closeCurrenciesDropdownPopover = () => {
    setCurrenciesDropdownPopoverShow(false);
  };

  // open settings dropdown
  const openSettingsDropdownPopover = () => {
    createPopper(settingsButtonDropdownPopoverShow.current, settingsPopoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setSettingsDropdownPopoverShow(true);
  };
  // close settings dropdown
  const closeSettingsDropdownPopover = () => {
    setSettingsDropdownPopoverShow(false);
  };

  // open additional trade information dropdown
  const openAdditionalTradeInfoDropdownPopover = () => {
    createPopper(additionalTradeInfoButtonDropdownPopoverShow.current, additionalTradeInfoPopoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setAdditionalTradeInfoDropdownPopoverShow(true);
  };
  // close settings dropdown
  const closeAdditionalTradeInfoDropdownPopover = () => {
    setAdditionalTradeInfoDropdownPopoverShow(false);
  };

  return (
    <div className="h-screen bg-black p-6" style={{backgroundColor}}>
      {/* Header */}
        <div className="grid 2xl:grid-cols-7 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-5">
          <div className="2xl:col-start-3 col-span-2 2xl:place-self-center xl:col-start-3 col-span-2 xl:place-self-center lg:col-start-3 col-span-3 lg:place-self-center md:col-start-3 col-span-2 md:place-self-center sm:col-start-2 col-span-3 sm:place-self-end xsm: col-start-2 place-self-center"><img className="2xl:ml-0 xl:ml-0 md:ml-0 sm:ml-12" src={agencyLogoSvg}></img></div>
          <div className="col-start-7 text-white place-self-center hover:cursor-pointer xsm:hidden sm:block md:block lg:block xl:block 2xl:block"><h1 className="mb-3.5">0  x  2  2  2 ... 2  3  2</h1></div>
          <div className="col-start-6 text-white place-self-center sm:place-self-center sm:mb-3.5 xsm:mb-3.5 hover:cursor-pointer xsm:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"><img className="mb-1" src={userWalletMobileScreenSvg}></img></div> 
        </div>
      <div className="flex flex-row w-full min-h-3/4 lg:mt-36 justify-center items-center md:mt-36 sm:mt-36 xsm:mt-1">
      {/* //Roadmap */}
      <div className="float-left w-4/12 xsm:hidden 2xl:block xl:block lg:block md:block sm:block">
        <button><img src={roadmapSvg} style={imageStyle}></img></button>
      </div>
        <div className="h-max 2xl:w-4/12 xl:w-5/12 lg:w-6/12 bg-white rounded-3xl p-6" style={exchangeContainerHeight}>
          <div className = "w-full h-1/6">
            <button className="float-right" onClick={() => {
                  console.log("height: ", window.innerHeight)
                  console.log("width: ", window.innerWidth)
                  settingsDropdownPopoverShow
                    ? closeSettingsDropdownPopover()
                    : openSettingsDropdownPopover();
                }}><img src={settingsSvg}></img></button>
          </div>
          {/* Swap */}
          <div className="flex flex-col justify-center items-center space-y-2 h-2/3"> 
            <div className="flex justify-center items-center w-5/6 h-2/6 rounded-2xl" style={{backgroundColor}}>
                <input className="w-2/3 h-2/3 text-4xl text-white p-4 focus:outline-0" style={{backgroundColor}}></input>
                <button className="w-1/6 h-1/2"><img className="float-right"src={usdcSvg}></img></button>
                <button className="w-1/6 h-1/2" onClick={() => {
                  currenciesDropdownPopoverShow
                    ? closeCurrenciesDropdownPopover()
                    : openCurrenciesDropdownPopover();
                }}
                ><img src={dropDownSvg} style={imageStyle}></img></button>
                {/* Settings dropdown */}
                <div id="dropdown" ref={settingsPopoverDropdownRef} className={(settingsDropdownPopoverShow ? "block " : "hidden ") + (color === "white" ? "bg-white " : backgroundColor1 + " ") +
                  "absolute text-base z-10 float-right w-1/6 h-2/6 py-2 list-none text-center rounded-2xl border-4 border-black border-solid shadow-lg p-5 mt-40 ml-36"
                }>
                  <h3>Slippage tolerance</h3>
                  <div className="flex flex-col h-4/5 py-2 text-sm dark:text-gray-400">
                    <div className="flex justify-center items-center text-center w-6/6 h-1/3 bg-white">
                      <button className="w-1/4 h-full rounded-2xl border-2 border-gray mr-1">
                          Auto
                      </button>
                      <input className="w-3/4 text-2xl text-white text-center p-4 rounded-2xl focus:outline-0" value={"0,5 %"}style={{backgroundColor}}></input>
                    </div>
                    <div className="w-6/6 h-full p-2 bg-white">
                      <div className="w-4/4 text-1xl">
                        Your transaction will revert if the price changes unfavorably by more than this percentage during your order.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Settings dropdown */}
            </div>
            <div className="flex justify-center items-center w-5/6 h-2/6 rounded-2xl" style={{backgroundColor}}>
                <input className="w-2/3 h-2/3 text-4xl text-white p-4 focus:outline-0" style={{backgroundColor}}></input>
                <button className="w-1/6 h-1/2"><img className="float-right"src={usdcSvg}></img></button>
                <button className="w-1/6 h-1/9" onClick={() => {
                  additionalTradeInfoDropdownPopoverShow
                    ? closeAdditionalTradeInfoDropdownPopover()
                    : openAdditionalTradeInfoDropdownPopover();
                }}><img src={informationIndicatorWhite} style={imageStyle}></img></button>
                {/* Currencies dropdown */}
                <div id="dropdown" ref={currenciesPopoverDropdownRef} className={(currenciesDropdownPopoverShow ? "block " : "hidden ") + (color === "white" ? "bg-white " : backgroundColor1 + " ") +
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
                {/* Currencies dropdown */}
                {/* Additional trade info dropdown */}
                <div id="dropdown" ref={additionalTradeInfoPopoverDropdownRef} className={(additionalTradeInfoDropdownPopoverShow ? "block " : "hidden ") + (color === "white" ? "bg-white " : backgroundColor1 + " ") +
                  "absolute text-base z-10 float-right h-2/6 w-1/5 py-2 list-none rounded-2xl border-4 border-black border-solid shadow-lg mx-0	my-0 p-5"
                }>
                  <div className="flex flex-col space-y-2 py-4 text-sm dark:text-gray-400 p-2">
                    <div className="mb-6">
                      <h3 className="float-left text-lg text-black">More details</h3>
                      <h3 className="float-right text-lg text-black hover:cursor-pointer" onClick={() => {  if(additionalTradeInfoDropdownPopoverShow){closeAdditionalTradeInfoDropdownPopover()}}}>X</h3>
                    </div>
                    <div className="float-left"><h2 className="text-black">Expected output</h2></div>
                    <div className="float-left"><h2>12.0798 $AGENCY</h2></div>
                    <div className="float-left"><h2 className="text-black">Price impact</h2></div>
                    <div className="float-left"><h2>0%</h2></div>
                    <div className="float-left"><h2 className="text-black">Minimum received after slippage ( %0.5 )</h2></div>
                    <div className="float-left"><h2>12.0798 $AGENCY</h2></div>
                    <div className="float-left"><h2 className="text-black">Network fee</h2></div>
                    <div className="float-left"><h2>~$1.72</h2></div>
                    {/* <div className="flex justify-left items-left w-6/6 h-1/9 p-2">
                      <div className="w-4/4">Network fee</div>
                      <div className="w-1/4">~$1.72</div>
                    </div> */}
                  </div>
                </div>
            </div>
            {/* <button className="w-1/6 h-1/9" data-dropdown-toggle="dropdown"><img src={informationIndicator} style={imageStyle}></img></button> */}
            <div className="w-5/6 h-2/6 rounded-2xl border-4 border-black border-solid">
              <button className="w-full bg-white h-full rounded-2xl">Swap</button>
          </div>
          </div>
        </div>
        {/* Stats */}
        <div className="w-4/12 float-right hover:cursor-pointer xsm:hidden sm:block md:block lg:block xl:block 2xl:block">
          <img className="float-right" src={statsSvg}></img>
        </div>
      </div>
      {/* Roadmap & Stats as a footer ( mobile ) */}
      <div className="w-full h-1/7 mt-3 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden">
        <div className="w-4/12 float-right hover:cursor-pointer">
            <img className="" src={statsSvg} style={imageStyle}></img>
        </div>
        <div className="w-4/12 float-left hover:cursor-pointer">
            <img className="" src={roadmapSvg}></img>
        </div>
      {/* Roadmap & Stats as a footer ( mobile ) */}
      </div>
    </div>
  );
}

export default App;