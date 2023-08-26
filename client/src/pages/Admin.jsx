import ImageInput from "../components/ImageInput"
import InputGroup from '../components/InputGroup'
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import Footer from "../components/Footer"
import edit from '../assets/edit_mark.svg';

import './Admin.css'
import Calendar from "../components/Calendar";
import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <>
      <Link className="back-button" to='/'>Назад</Link>
      <ImageInput cl='big' width='300px' height='351px' label='Добавить фото' />
      <InputGroup />
      <h1 className="tour-title">TOUR+</h1>
      <div className="tour-interface">
        <div className="avatar-display">
          <ImageInput cl='small' width='252px' height='320px' label='Добавить фото' topTitle='Ресторан “Горский”'/>
        </div>
        <div className="desc-display">
          <div className="edit">
            <img src={edit} alt="" />
          </div>
          <h5>Описание</h5>
          <p>
            Горский - уютный ресторан в самом сердце Таганрога, предлагающий своим гостям самые вкусные и оригинальные блюда кавказской кухни. Здесь вы сможете насладиться изысканным интерьером и теплой атмосферой, созданной для приятного времяпровождения. Приходите в Горский и насладитесь незабываемым гастрономическим опытом!
          </p>
        </div>
        <div className="schedule-display">
          <div className="edit">
            <img src={edit} alt="" />
          </div>
          <h5>Описание</h5>
          <div className="schedule-list">
            <p><span>Понедельник</span> <span>9:00-23:00</span></p>
            <p><span>Вторник</span> <span>9:00-23:00</span></p>
            <p><span>Среда</span> <span>9:00-23:00</span></p>
            <p><span>Четверг</span> <span>9:00-23:00</span></p>
            <p><span>Пятница</span> <span>9:00-23:00</span></p>
            <p><span>Суббота</span> <span>9:00-23:00</span></p>
            <p><span>Воскресенье</span> <span>9:00-23:00</span></p>
          </div>
        </div>
      </div>
      <h2 className="statics-title">Статистика</h2>
      <div className="chart-box">
        <PieChart />
        <LineChart />
      </div>
      <h2 className="statics-title">Календать событий</h2>
      <div className="calendar-box">
        <Calendar />
      </div>
      <Footer />
    </>
  )
}

export default Admin;