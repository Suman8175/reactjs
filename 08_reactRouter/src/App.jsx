import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import NavBar from "./component/header/NavBar.jsx";
import Profile from "./component/Profile.jsx";
import Refer from "./component/contact/Refer.jsx";
import Address from "./component/contact/Address.jsx";
import Phone from "./component/contact/Phone.jsx";
import NotFound from "./NotFound.jsx";


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />}>
          <Route path="address" element={<Address />} />
          <Route path="phone" element={<Phone />} />
          <Route index element ={<Refer />} />
        </Route>
      <Route path="/about" element={<About />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
