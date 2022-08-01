import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AllQuotes from "./components/pages/AllQuotes";
import DailyQuotes from "./components/pages/DailyQuotes";
import Books from "./components/pages/Books";
import PostQuotes from "./components/pages/PostQuotes";
import Authors from "./components/pages/Authors";
import LogIn from "./components/pages/LogIn";
import Register from "./components/pages/Register";
import SocialLogin from "./components/SocialLogin";
import RequireAuth from "./components/shared/RequireAuth";

function App() {
  return (
    <div className="root_point">
        <Navbar/>         
        <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/home" element={<Home/>}></Route>
             <Route path="/allQuotes" element={<AllQuotes/>}></Route>
             <Route path="/dailyQuotes" element={<DailyQuotes/>}></Route>
             <Route path="/books" element={<Books/>}></Route>
             <Route path="/postQuotes" element={
              <RequireAuth>
                 <PostQuotes/>
              </RequireAuth>
             }></Route>
             <Route path="/authors" element={<Authors/>}></Route>
             <Route path="/socialLogin" element={<SocialLogin/>}></Route>
             <Route path="/logIn" element={<LogIn/>}></Route>
             <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;
