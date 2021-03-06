import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import {
  LoginPage,
  MainPage,
  CreatePost,
  EditPost,
  NotFound,
  Navbar,
  Admin,
  EventDetails,
  UserDetails,
  ReviewPage,
  Search,
} from "./components";
import EditUser from "./components/pages/EditUser.jsx";
import LoginNav from "./components/LoginNav";
import { auth, initmessaging } from "./database/firebase";
import { useState, useEffect } from "react";

function App() {
  //TODO: Add routes: userProfile, SpecificPost, CreatePost, Calendar, SearchPage
  const [user, setUser] = useState(null);
  useEffect(() => {
    const msg = initmessaging
      .requestPermission()
      .then(function () {
        console.log("Have Permission");
        return initmessaging.getToken();
      })
      .then(function (token) {
        console.log("Token : ", token);
      })
      .catch(function (err) {
        console.warn("Error Occured : ", err);
      });
    const authUnsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        var isKmitl = user.email;
        isKmitl = isKmitl.substring(isKmitl.indexOf("@") + 1);
        if (isKmitl === "kmitl.ac.th") {
          setUser(user);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });
    return () => authUnsubscribe(); //unsubscribe when component unmount
  }, []);

  const Navigation = user ? <Navbar /> : <LoginNav />;

  return (
    <Router>
      {Navigation}
      <Switch>
        <Route exact path="/" component={user ? MainPage : LoginPage} />
        <Route exact path="/main-page" component={MainPage} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/edit-post/:eventId" component={EditPost} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/Admin" component={() => <Admin />} />
        <Route exact path="/events/:eventId" component={EventDetails} />
        <Route exact path="/review-user/:userID" component={() => <ReviewPage />} />
        <Route exact path="/edit-user" component={EditUser} />
        <Route exact path="/u/:userId" component={UserDetails} />
        <Route exact path="/search/:searchText" component={Search} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
