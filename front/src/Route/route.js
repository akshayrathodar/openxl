import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// import Home from '../Screens/Home';
import Todos from '../Modules/Todo';
// import uploadVideo from '../Screens//uploadvideo';
// import VideoDetail from '../Screens/videoDetailScreen';

import ButtonAppBar from '../Elements/header';

export const Routes = () => {
    return(
        <BrowserRouter basename="/">
            <ButtonAppBar/>
        <Switch>
            <Route exact path="/" component={Todos}></Route> 
            {/* <Route exact path={["/","/home"]} component={Home}></Route> 
            
            <Route exact path="/uploadvid" component={uploadVideo}></Route>
            <Route path="/:id/videodetail" component={VideoDetail} />  */}
        </Switch> 
        </BrowserRouter>
    )
        
}
