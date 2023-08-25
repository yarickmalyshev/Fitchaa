
import { IonList, IonItem, IonLabel } from "@ionic/react"
import { useState } from "react"

const EventList = ({ events }: any) => {

  return (
    <IonList>
      {
        events.map(event => {
          console.log(event)
          return (
            <IonItem>
              <IonLabel>
                <h2>{event.time.getDay()}.{event.time.getMonth()}.{event.time.getFullYear()}, {event.time.getHours()}:{event.time.getMinutes()} {event.title}</h2>
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