import Navication from "./compunent/Navication";
import Navclass from "./compunent/NavClass";
// import Barclass from "./compunent/Barclass"
// import Secondfun from "./compunent/SecondFun";
import StudyState from "./compunent/StateSudy";
function App() {
  return (
    <div className="App">
       <Navclass/>
      {/* <Navclass/>
      <Barclass/>
      <Secondfun/> */}
      <StudyState/>
    </div>
  );
}

export default App;
