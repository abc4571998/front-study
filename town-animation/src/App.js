import "./App.css";

function App() {
  return (
    <>
      <h1>Have a Good Day!!</h1>
      <section>
        <article className="sky">
          <img className="sun" src="/img/sun.png" alt="sun" />
          <img className="cloud1" src="/img/cloud1.png" alt="cloud1" />
          <img className="cloud2" src="/img/cloud2.png" alt="cloud2" />
        </article>
        <acticle className="town">
          <img className="circle" src="/img/circle.png" alt="circle" />
          <img className="night" src="/img/town_night.png" alt="night" />
          <img className="day" src="/img/town_day.png" alt="day" />
        </acticle>
        <article className="people">
          <img className="man" src="/img/man.png" alt="man" />
          <img className="family" src="/img/family.png" alt="family" />
        </article>
      </section>
    </>
  );
}

export default App;
