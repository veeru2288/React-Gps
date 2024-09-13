
import SideNavbar, {SidebarItems} from './Components/SideNavbar'
import {Link,Routes,Route,BrowserRouter} from 'react-router-dom'
import {Calendar, Flag, Home,Layers,LayoutDashboard, LifeBuoy, Settings, StickyNote} from 'lucide-react'


import About from './Components/About'
import Contact from './Components/Contact'
import Track from './Components/Track'
import LeafletMap from './Components/LeafletMap'

function App() {
  

  return (
    <>
   
  <div className='flex'>
  <BrowserRouter> 
  <SideNavbar>
  <Link to="/"><SidebarItems icon={< LayoutDashboard size={20} />} text="Dashboard"  alert /></Link>
  <Link to="/Track"><SidebarItems icon={< Layers size={20} />} text="Track"  alert /></Link>
  <hr className='my-3' />
  <Link to="/About"><SidebarItems icon={< LifeBuoy size={20} />} text="About"  alert /></Link>
  <Link to="/Contact"><SidebarItems icon={< Calendar size={20} />} text="Contact"  alert /></Link>
  </SideNavbar>
  <Routes>
  <Route path="/" element={<></>} />
  <Route path="/About" element={<About/>} />
  <Route path="/Track" element={<Track/>} />
  <Route path="/Contact" element={<Contact/>} />
 
</Routes>
</BrowserRouter>
  
  <div className=''>
  <LeafletMap/>
  </div>
 
    

       
  </div>
    </>
  )
}

export default App
