
import { IonList, IonItem, IonLabel } from "@ionic/react"
import { useState } from "react"

const EventList = ({ events }: any) => {

  return (
    <IonList>
      {
        events.map((event: any) => {
          console.log(event)
          let day = event.time.getDay();
          let month = event.time.getMonth();
          let year = event.time.getFullYear();
          let hour = event.time.getHours();
          let minutes = event.time.getMinutes();
          
          if (day < 10) day = `0${day}`;
          if (month < 10) month = `0${month}`;
          if (year < 10) year = `0${year}`;
          if (hour < 10) hour = `0${hour}`;
          if (minutes < 10) minutes = `0${minutes}`;


          return (
            <IonItem>
              <IonLabel>
                <h2>{day}.{month}.{year}, {hour}:{minutes},   {event.title}</h2>
                <p>{event.sub}</p>
              </IonLabel>

            </IonItem>
          )
        })
      }
    </IonList>
  )
}

export default EventList;