import { useState } from "react"
import './InputGroup.css';

const InputGroup = () => {

  // подгружаются имя, номер и теги.

  const [name, setName] = useState('Кирилл Надолинский');
  const [tel, setTel] = useState('8 999 333-09-09');
  const [tag, setTag] = useState('');
  const [array, setArray] = useState(['IT']);
  const [disabled, setDisabled] = useState(true);

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
  const switchAccess = () => {
    setDisabled(!disabled);
  } 


  return (
    <div className="input-group-component">
      <div className="input-group">
        <div>
          <label htmlFor="">Логин</label>
          <input disabled={disabled} className="main-input" type="text" name="" id="" value={name} onChange={watchName}/>
        </div>
        <div>
          <label htmlFor="">Номер телефона</label>
          <input disabled={disabled} className="main-input" type="tel" name="" id="" value={tel} onChange={watchTel}/>
        </div>
        <div>
          <label htmlFor="">Интересы</label>
          <input disabled={disabled} className="main-input" type="text" value={tag} onChange={intoArray} />
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
        
      </div>
      <button className="input-button" onClick={switchAccess}>изменить</button>
    </div>
  )
}

export default InputGroup;