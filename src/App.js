import logo from './logo.svg';
import './App.css';
import { createHashRouter,RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import LayOut from './Components/LayOut/LayOut';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import All from './Components/All/All';





let routers=createHashRouter([
  {path:'/',element:<LayOut/> ,children:[
    {index:true ,element:<Home/>},
    {path:'about' ,element:<AboutMe/>},
    {path:'education' ,element:<Education/>},
    {path:'skills' ,element:<Skills/>},
    {path:'portfolio' ,element:<Portfolio/>},
    {path:'contact' ,element:<Contact/>},
    {path:'all' ,element:<All/>},
  ]}
]);
function App() {
  return (<RouterProvider router={routers}></RouterProvider>
   
  );
}

export default App;
