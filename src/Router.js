import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";
import './App.css';
import Header from "./Header";

const AppRouter = () => {
    return (
       <Router>
           <Header/>
           <Switch>
               <Route exact path={"/"}>
                   <div className="app_page">
                       <Sidebar/>
                       <RecommendedVideos/>
                   </div>
               </Route>
               <Route>
                   <div className="app_page">
                       <Sidebar/>
                       <SearchPage />
                   </div>
               </Route>
           </Switch>
       </Router>
    );
};

export default AppRouter;