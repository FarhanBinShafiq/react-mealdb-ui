//import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Header from './component/Header/Header';
import './App.css';
import Resturant from './component/Resturant/Resturant';
import NotFound from "./component/NotFound/NotFound";
import MealDetail from "./component/MealDetail/MealDetail";
 

function App() {
  return (
    <div className="App">
         <BrowserRouter> 
             <Header></Header> 
            <Routes>
                <Route path="resturant" element={<Resturant></Resturant>}></Route>
                <Route exact path="/resturant/:MealDetail" element={<MealDetail></MealDetail>}></Route>
                
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
