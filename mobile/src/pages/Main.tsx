import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tabs from './Tabs';
import './Main.css';

const Main: React.FC = () => {
  return (
    <IonPage>
      <div className="map">
      </div>
      <Tabs />
    </IonPage>
  );
};

export default Main;
