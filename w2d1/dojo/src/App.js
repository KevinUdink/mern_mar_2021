import './App.css';
import Activities from './components/Activities';
import Tracks from './components/Tracks';

function App() {
  return (
    <div className="App">
      <h1>
        First react app
      </h1>

      <Activities />
      <div className="track-column">
        <Tracks 
          title={ "Web Fundamentals" } 
          userName={ "Instructor Kevin " } 
          />
        <Tracks title={ "MERN" }  />
        <Tracks title={ "Underwater Basket Weaving" }  />
        <Tracks title={ "Algorithms" }  />
      </div>
    </div>
  );
}

export default App;
