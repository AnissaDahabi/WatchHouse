import '../../StyleSheets/style.css';
import '../../index'
import NavBar from './NavBar';
import BackgroundVideo from "./BackgroundVideo";
import HomeTitle from "./HomeTitle";
import Banner from "./Banner";
import Favorites from "./Favorites";

function App() {
  return (
      <div>
          <div className="video-section">
            <BackgroundVideo/>
            <NavBar/>
            <HomeTitle/>
          </div>
          <div className="banner-section">
              <Banner/>
          </div>
          <div>
              <Favorites/>
          </div>
      </div>
  );
}

export default App;
