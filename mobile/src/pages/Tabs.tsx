import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Calendar from "./Calendar";
import News from "./News";
import Places from "./Places";
import Profile from "./Profile";
import { Link, Redirect, Route } from "react-router-dom";

const Tabs: React.FC = () => {
  return (
    
    <div className="tabs-component">
      <div className="tabs">
        <div className="tab-list">
          <Link to='/cal'>
            <button className="tab-item">A</button>
          </Link>
          <Link to='/place'>
            <button className="tab-item">B</button>
          </Link>
          <button className="tab-item">OOO</button>
          <Link to='/news'>
            <button className="tab-item">C</button>
          </Link>
          <Link to='/profile'>
            <button className="tab-item">D</button>
          </Link>
        </div>
        <div className="tab-content">
          <IonReactRouter>
            <IonRouterOutlet>
              
              <Route path='/cal' component={Calendar}/>
              <Redirect exact from="/" to="/cal" />
              <Route path='/place' component={Places}/>
              <Route path='/news' component={News}/>
              <Route path='/prf' component={Profile}/>
            </IonRouterOutlet>
          </IonReactRouter>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
