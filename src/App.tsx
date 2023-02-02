function App() {

  //   useEffect(() => {

  //   // 👇️ set style on body element
  //   document.body.style.backgroundColor = 'salmon';

  //   return () => {
  //     // 👇️ optionally remove styles when component unmounts
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);
  return (
    // <Login></Login>
    <div className="flex h-screen bg-black" style={{backgroundColor: "#1A1B23"}}>
      <div className="flex items-center flex-col space-y-1 justify-center h-3/6 w-2/6 m-auto bg-white rounded-3xl">
        <div className="w-3/4 h-1/6 rounded-2xl"><input className="w-full h-full rounded-2xl text-3xl	text-white px-1 py-px" style={{backgroundColor: "#1A1B23"}}></input></div>
        <div className="w-3/4 h-1/6 rounded-2xl"><input className="w-full h-full rounded-2xl" style={{backgroundColor: "#1A1B23"}}></input></div>
        <div className="w-3/4 h-1/6 rounded-md border-4 border-black border-solid"><button className="w-full bg-white h-full rounded-md">Swap</button></div>
      </div>
    </div>
  );
}

export default App;
