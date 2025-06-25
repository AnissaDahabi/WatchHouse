import '../StyleSheets/style.css';
import '../index'
import NavBar from './NavBar';
import BackgroundVideo from "./BackgroundVideo";

function App() {
  return (
      <div>
        <div>
          <BackgroundVideo/>
          <NavBar/>
        </div>
      </div>
  );
}

export default App;
