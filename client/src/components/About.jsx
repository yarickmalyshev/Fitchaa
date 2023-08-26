const About = () => {
  return (
    <section id="about" className="offer-section">
          <div className="container">
            <div className="offer-section__row">
              <div className="offer-section__block">
                <div className="offer-section__title">TAG.TOUR</div>
                <div className="offer-section__subtitle">Просто.Нереально.</div>
                <div className="offer-section__download">
                  <img src="/img/download-android.png" alt="" />
                </div>
                <div className="offer-section__qr-code">
                  <img src="/img/qr.jpg" alt="" />
                </div>
              </div>
              <div className="offer-section__description">
                Мы собрали все необходимые сведения о нашем городе в одном
                месте. Забудьте о переживаниях о потерянных карты и брошенных
                гайдбуках – теперь важные информационные точки всегда под рукой!
              </div>
            </div>
          </div>
        </section>
  )
}
export default About;