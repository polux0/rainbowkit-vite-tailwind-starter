import settingsSvg from "./assets/noun-settings-pixel-art-2758641.svg";
import usdcSvg from "./assets/usdc-logo-svg.svg"
import usdcDarkSvg from "./assets/usdc-logo-dark-svg.svg"
import dropDownSvg from "./assets/dropdown-indicator.svg"
import informationIndicatorWhite from "./assets/information-indicator-white.svg"
import agencyLogoSvg from "./assets/agency-logo.svg";
import React from "react";
import { createPopper } from "@popperjs/core";

function App() {

  // technical debt:
  // convert styles to tailwind;
  // currenciesPopoverDropdownRef has position absolute and huge margins - see if there is better way of approaching this
  // different values are fixed and ( should be dynamic )
  // swap container has a fixed height ( 500px )
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
  const dynamicallAlignment = {
    marginLeft: "calc(100vw / 2)"
  }
  const exchangeModalRef: any = React.createRef();

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
      {/* header */}
        <div className="flex justify-center w-12/12 mb-3">
          <div className="w-5/12"></div>
          <div className="w-5/12 text-center">
            <img src={agencyLogoSvg}></img>
          </div> 
         <div className="w-2/12 text-center text-white"><h1>0  x  2  2  2 ... 2  3  2</h1></div>

        </div>
      <div className="flex flex-col w-full min-h-3/4 justify-center items-center">
        <div className="h-max bg-white rounded-3xl p-6" style={exchangeContainerHeight}>
          <div className = "w-full h-1/6">
            <button className="float-right" onClick={() => {
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
                <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img className="float-right"src={usdcSvg}></img></button>
                <button className="w-1/6 h-1/9" data-dropdown-toggle="dropdown" onClick={() => {
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
                      <h3 className="float-right text-lg text-black" onClick={() => {  if(additionalTradeInfoDropdownPopoverShow){closeAdditionalTradeInfoDropdownPopover()}}}>X</h3>
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
      </div>
    </div>
  );
}

export default App;