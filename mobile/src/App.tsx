import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Calendar from './pages/Calendar';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import circle from './assets/circle.svg';
import calendar from './assets/calendar.svg';
import places from './assets/places.svg';
import profile from './assets/profile.svg';
import news from './assets/news.svg';

import './theme/App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/places">
            <div>blabla 1</div>
          </Route>
          <Route exact path="/news">
            <div>blabla 2</div>
          </Route>
          <Route exact path="/profile">
            <div>blabla 3</div>
          </Route>
          <Route exact path="/">
            <Redirect to="/calendar" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className='ion-padding' slot="bottom">
          <IonTabButton tab="calendar" href="/calendar">
            <IonIcon icon={calendar} />
          </IonTabButton>
          <IonTabButton tab="places" href="/places">
            <IonIcon icon={places} />
          </IonTabButton>
          <IonTabButton tab="maps" href="/">
            <IonIcon icon={circle} />
          </IonTabButton>
          <IonTabButton tab="news" href="/news">
            <IonIcon icon={news} />
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={profile} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
