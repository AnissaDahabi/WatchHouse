import '../StyleSheets/style.css';
import '../index'
import NavBar from './NavBar';
import BackgroundVideo from "./BackgroundVideo";
import HomeTitle from "./HomeTitle";

function App() {
  return (
      <div>
        <div>
          <BackgroundVideo/>
          <NavBar/>
          <HomeTitle/>
        </div>
      </div>
  );
}

export default App;
