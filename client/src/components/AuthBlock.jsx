import { useState } from "react"
import { Link } from  'react-router-dom';
import './AuthBlock.css'

const Reg = ({ watchName, watchTel, intoArray, array }) => {
  return (
    <div className="input-group-row">
      <label htmlFor="">Логин</label>
      <input className="main-input" type="text" name="" id="" onChange={watchName}/>
      <label htmlFor="">Номер телефона</label>
      <input className="main-input" type="tel" name="" id="" onChange={watchTel}/>
      <label htmlFor="">Интересы</label>
      <input className="main-input" type="text" onChange={intoArray} />
      <p className="tag-line">
        {
          array.map(item => {
            return (
              <div key={item} className="input-tag">
                <div className="content">
                  {item}
                </div>
                <div className="button">x</div>
              </div>
            )
          })
        }
      </p>
    </div>
  )
}
const Auth = ({watchName, watchTel}) => {
  return (
    <div className="input-group-row">
      <label htmlFor="">Логин</label>
      <input className="main-input" type="text" name="" id="" onChange={watchName}/>
      <label htmlFor="">Номер телефона</label>
      <input className="main-input" type="tel" name="" id="" onChange={watchTel}/>
    </div>
    )
}

const AuthBlock = () => {
  const [auth, setAuth] = useState(true);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [tag, setTag] = useState('');
  const [array, setArray] = useState([]);

  const watchName = (e) => {
    setName(e.target.value);
  }
  const watchTel = (e) => {
    setTel(e.target.value);
  }
  const intoArray = (e) => {
    setTag(e.target.value);
    setArray(tag.split(' '));
  }
  console.log(name, tel, tag);

  return (
    <div id="auth" className="auth-component">
      <div className="auth-switch">
        <button className={`${auth ? 'active' : '' } auth-btn`} onClick={() => setAuth(true)}>Авторизация</button>
        <button className={`${!auth ? 'active' : '' } reg-btn`} onClick={() => setAuth(false)}>Регистрация</button>
      </div>
      
      { auth ? <Auth watchName={watchName} watchTel={watchTel} /> : <Reg watchName={watchName} watchTel={watchTel} intoArray={intoArray} array={array} />}

      <div className="form-button">
        <Link to='/admin'>
          Войти
        </Link>
      </div>

    </div>
  )
}

export default AuthBlock;