import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import OwnerLogin from './pages/OwnerLogin'
import OwnerSignup from './pages/OwnerSignup' 
import PropertyHostForm from "./componets/PropertyHostForm"
import HostingList from './componets/HostingList';
import Contact from './componets/Contact';
import HowItWorks  from './componets/HowItWorks';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/owner/login" element={<OwnerLogin />} />
          <Route path="/owner/signup" element={<OwnerSignup />} />
           <Route path="/" element={<Home/>} />
            <Route path="/property-host-form" element={<PropertyHostForm />} />
            <Route path='/list' element={<HostingList/>} />
            <Route path='/us' element={<Contact/>}/>
            <Route path='/WORK' element={< HowItWorks/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;