import YourSvg from "./assets/noun-settings-pixel-art-2758641.svg";
import usdcSvg from "./assets/usdc-logo-svg.svg"
import dropDownSvg from "./assets/dropdown-indicator.svg"

function App() {

  // technical debt - convert styles to tailwind;
  const backgroundColor = "#1A1B23";
  const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  };
  //   useEffect(() => {

  //   // 👇️ set style on body element
  //   document.body.style.backgroundColor = 'salmon';

  //   return () => {
  //     // 👇️ optionally remove styles when component unmounts
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);
  return (
    
    <div className="h-screen bg-black p-6" style={{backgroundColor}}>
      
      {/* Dropdown menu */}
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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

      <div className="h-3/5 w-2/6 bg-white rounded-3xl p-6">
        <div className = "w-full h-1/6">
          <button className="float-right"><img src={YourSvg}></img></button>
        </div>
        {/* Swap */}
        <div className="flex flex-col justify-center items-center space-y-2 h-2/3">
          <div className="flex justify-center items-center w-5/6 h-2/6 rounded-2xl" style={{backgroundColor}}>
              <input className="w-2/3 h-2/3 text-4xl text-white p-4 focus:outline-0" style={{backgroundColor}}></input>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img className="float-right"src={usdcSvg}></img></button>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img src={dropDownSvg} style={imageStyle}></img></button>
          </div>
          <div className="flex justify-center items-center w-5/6 h-2/6 rounded-2xl" style={{backgroundColor}}>
              <input className="w-2/3 h-2/3 text-4xl text-white p-4 focus:outline-0" style={{backgroundColor}}></input>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img className="float-right"src={usdcSvg}></img></button>
              <button className="w-1/6 h-1/2" data-dropdown-toggle="dropdown"><img src={dropDownSvg} style={imageStyle}></img></button>
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
