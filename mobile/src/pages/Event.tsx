import './Event.css';
import { IonDatetime, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import EventList from '../components/EventList'
interface ContainerProps { }

const Event: React.FC<ContainerProps> = () => {

  const [eventDate, setEventDate] = useState(new Date());
  const [t, setT] = useState('');
  const [s, setS] = useState('');
  const [eventList, setEventList] = useState([]);

  const mutateEventDate = (e) => {
    let date = new Date(e.detail.value);
    setEventDate(date);
  }
  const mutateTitle = (e) => {
    setT(e.target.value);
  }
  const mutateSub = (e) => {
    setS(e.target.value);
  }


  const createEvent = () => {
    setEventList(([] as any).concat(eventList, { title: t, sub: s, time: eventDate}));
    console.log(eventList);
  }
  // сделать пост запрос на сервер

  return (
    <div className='event-component'>
      <IonDatetime className='calendar' onIonChange={mutateEventDate} />
      <IonInput label="Событие" placeholder="Введите название события" onIonChange={mutateTitle}/>
      <IonInput label="Описание" placeholder="Введите описание события " onIonChange={mutateSub}/>
      <IonButton onClick={createEvent}>Создать</IonButton>
      <EventList events={eventList} />
    </div>
  );
};

export default Event;

