import './Calendar.css';
import { IonDatetime, IonInput, IonButton, IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';
import EventList from '../components/EventList'
interface ContainerProps { }

const Calendar: React.FC<ContainerProps> = () => {

  const [eventDate, setEventDate] = useState(new Date());
  const [t, setT] = useState('');
  const [s, setS] = useState('');
  const [eventList, setEventList] = useState([]);

  const mutateEventDate = (e: any) => {
    let date = new Date(e.detail.value);
    setEventDate(date);
  }
  const mutateTitle = (e: any) => {
    setT(e.target.value);
  }
  const mutateSub = (e: any) => {
    setS(e.target.value);
  }


  const createEvent = () => {
    setEventList(([] as any).concat(eventList, { title: t, sub: s, time: eventDate}));
    console.log(eventList);
  }
  // сделать пост запрос на сервер

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='event-component'>
          <IonDatetime className='calendar' onIonChange={mutateEventDate} />
          <IonInput label="Событие" placeholder="Введите название события" onIonChange={mutateTitle}/>
          <IonInput label="Описание" placeholder="Введите описание события " onIonChange={mutateSub}/>
          <IonButton onClick={createEvent}>Создать</IonButton>
          <EventList events={eventList} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Calendar;