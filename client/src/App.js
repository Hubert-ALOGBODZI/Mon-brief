// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
// import Doctors from './components/Doctors';
import Home from "./components/Home";
import Contact from "./components/Contact";
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Fire from './components/Fire';
// import Hero from './components/Hero';
import Consultation from "./components/Consultation";

// import React, { useState, useEffect } from 'react';
// import Login from "./"
import Register from "./pagesFake/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Geolocalisation from "./Geolocalisation/Geolocalisation";

import Login from "./Authentification/Login";

import Signup from "./Authentification/Signup";
import HomeA from "./Authentification/HomeA";

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from "./components/LandingPage";
import Localisation from "./components/Localisation";
// import Login from "../src/pages/Login"
// import { ToastContainer } from 'react-toastify';

import UserList from "./admin/UserList";
import AddUser from "./admin/AddUser";
import EditUser from "./admin/EditUser";
import Tab from "./components/Tab";

import Showtab from "./Showtab/Showtab";
import TabC from "./Tabcomponent/TabC";
import Boot from "./Tabcomponent/Boot/Boot";
// import SImpleTabs from "./SImpleTabs/SImpleTabs";

import NavBar from "./components/Navbar";
import { auth } from "./Authentification/Firebase";
import { useEffect } from "react";
import { useState } from "react";

// import Sectionadmin from "./AdminH/Sectionadmin";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
      // console.log(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Localisation /> */}
          {/* <Tabs /> */}
          {/* <Consultation /> */}

          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Consultation />} />
          {/* <Route path="/" element={<Showtab />} /> */}
          {/* <Route path="/" element={<NavBar />} /> */}
          {/* <Route path="/" element={<Sectionadmin />} /> */}
          {/* <Route path="/" element={<Geolocalisation />} /> */}
          {/* <Route path="/a" element={<AddUser />} /> */}
          {/* <Route path="/SImpleTabs" element={<SImpleTabs />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="/" element={<HomeA name={userName} />} /> */}

          {/* <Route path="/a" element={<UserList />} /> */}
          {/* <Route path="/add" element={<AddUser />} /> */}
          {/* <Route path="/edit/:id" element={<EditUser />} />  */}
        </Routes>
      </div>

      {/* // <BrowserRouter>
      // <Routes>
      // <Route path="/"> 
      // <Route path="login" element={<Login />} /> 
      // <Route path="register" element={<Register />} /> 
      // </Route> 
      // </Routes> 
    // </BrowserRouter>  */}
    </BrowserRouter>
  );
}

export default App;

// const [user, setUser] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const [emailError, setEmailError] = useState('');
// const [passwordError, setPasswordError] = useState('');

// const [hasAccount, setHasAccount] = useState('false');

// const clearInputs = () => {
//   setEmail('');
//   setPassword('');
// }

// const clearErrors = () => {
//   setEmailError('');
//   setPasswordError('');
// }

// const handleLogin = () => {
//   clearErrors();
//   Fire
//     .auth()
//     .signInWidthEmailAndPassword(email, password)
//     .catch(err => {
//       switch (err.code) {
//         case "auth/invalid-email":
//         case "auth/user-disabled":
//         case "auth/user-not-found":
//           setEmailError(err.message);
//           break;

//         case "auth/wrong-password":
//           setPasswordError(err.message);
//           break;
//       }
//     })
// };

// const handleSignup = () => {
//   clearErrors();
//   Fire
//     .auth()
//     .createUserWidthEmailAndPassword(email, password)
//     .catch(err => {
//       switch (err.code) {
//         case "auth/email-already-in-use":
//         case "auth/invalid-email":

//           setEmailError(err.message);
//           break;

//         case "auth/weak-password":
//           setPasswordError(err.message);
//           break;
//       }
//     })
// };

// const handleLogout = () => {
//   Fire.auth().signOut();
// };

// const authListner = () => {
//   Fire.auth().onAuthStateChanged((user) => {
//     if (user) {
//       clearInputs();
//       setUser(user);
//     } else {
//       setUser("");
//     }
//   });
// };
// useEffect(() => {
//   authListner();
// }, [])

{
  /* <div className="navbar">
      <Navbar />
      </div>
       <div className="main">
       {user ? (
      <Hero  handleLogout={handleLogout}/>

       ): (
        <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError} 
        passwordError={passwordError} 
      />
       )}
       </div> */
}

{
  /* <BrowserRouter> */
}
{
  /* <div className="App"> */
}

{
  /* <ToastContainer /> */
}

{
  /* <> */
}
{
  /* <Navbar /> */
}
{
  /* <Routes> */
}

{
  /* <Route exact path='/' element={<Home />} /> */
}

{
  /* <Route path='/Doctors' element={<Doctors />} /> */
}
{
  /* <Route exact path='/Contact' element={<Contact />} /> */
}
{
  /* <Route exact path='/Footer' element={<Footer />} /> */
}

{
  /* <Route exact path='/Login' element={<Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            />} />
          <Route exact path='/Hero' element={<Hero handleLogout={handleLogout} />} /> */
}

{
  /* <Route path='update/:id' element={<Add />} />
          <Route path='View/:id' element={<View />} /> */
}

{
  /* </Routes> */
}

{
  /* </div> */
}
{
  /* <Footer /> */
}
{
  /* </> */
}
{
  /* </BrowserRouter> */
}

{
  /* <Home /> */
}
{
  /* <Doctors /> */
}

{
  /* <Contact /> */
}
{
  /* <Footer /> */
}

// // import logo from './logo.svg';
// import Navbar from './components/Navbar';
// import Doctors from './components/Doctors';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <BrowserRouter>

//       <main>
//         <Route path="/" exact>
//           <Home />
//         </Route>

//         <Route path="/Contact" exact>
//           <Contact />
//         </Route>

//         <Route path="/Doctors" exact>
//           <Doctors />
//         </Route>

//
//    );
// }

// export default App;
