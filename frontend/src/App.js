import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import { useUserContext } from './hooks/useUserContext';
//components
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';


function App() {

  const {user} = useUserContext();

  const selectDashboard = (role) => {
    switch(role){
      case "admin":
        return (<AdminDashboard/>)
      case "teacher":
        return (<TeacherDashboard/>)
      case "student":
        return (<StudentDashboard/>)
      default:
        return (<Home/>);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path = '/'
            element ={ (!user)? <Home/> : <Navigate to='/dashboard'/>}

          />
          <Route
            path='/dashboard'
            element = { user? selectDashboard(user.role): <Navigate to='/'/>}
          />
          
          <Route
            path ='*'
            element = {<h1 style={{padding : "20px", textAlign: "center"}}>Error 404 : Not Found</h1>}
          />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
