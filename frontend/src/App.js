import {BrowserRouter,Routes,Route} from 'react-router-dom';

//components
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path = '/'
            element ={ <Home/>}
          />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
