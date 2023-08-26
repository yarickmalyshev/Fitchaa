
import advantage1 from '../assets/advantage1.png';
import advantage2 from '../assets/advantage2.png';
import advantage3 from '../assets/advantage3.png';
import advantage4 from '../assets/advantage4.png';
import advantage5 from '../assets/advantage5.png';

const TourPlus = () => {
  return (
    <section id='#tour' className="tour-plus">
      <div className="container">
      <div className="innerContainer">
        <h2 className="tour-plus__title">TOUR+</h2>
        <div className="tour-plus__advantages">
          <div className="tour-plus__advantage-item row">
            <div className="advantage-item__description-first">
              Подписка на сервис позволит вам получить доступ к статистике
            </div>

                <div className="advantage-item__image">
                  <img src={advantage1} alt="" />
                </div>
              </div>
              <div className="tour-plus__advantage-item row">
                <div className="advantage-item__description-second">
                  Возможность добавлять и редактировать информацию о своем
                  бизнесе
                </div>

                <div className="advantage-item__image image2">
                  <img className="image2" src={advantage2} alt="" />
                </div>
              </div>
              <div className="tour-plus__advantage-item column">
                <div className="advantage-item__description-third">
                  Это поможет вам лучше понять свою целевую аудиторию и
                  принимать обоснованные решения для развития бизнеса
                </div>

                <div className="advantage-item__image">
                  <img src={advantage3} alt="" />
                </div>
              </div>
              <div className="tour-plus__advantages-row">
                <div
                  className="tour-plus__advantage-item marginright column"
                  id="item4"
                >
                  <div className="advantage-item__description-fourth">
                    Улучшает взаимодействие с посетителями, повышает видимость и
                    репутацию вашего бизнеса
                  </div>

                  <div className="advantage-item__image">
                    <img src={advantage4} alt="" />
                  </div>
                </div>
                <div className="tour-plus__advantage-item column" id="item5">
                  <div className="advantage-item__description-fifth">
                    Обеспечивает более эффективную рекламу и продвижение
                  </div>

                  <div className="advantage-item__image">
                    <img src={advantage5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          <div className="tour-plus__subtitle">
            Вместе с <span> TOUR+ </span> все дороги ведут к вам!
          </div>
        <div className="tour-plus__button">
          <a href=""> 30 дней за 299 рублей </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default TourPlus;