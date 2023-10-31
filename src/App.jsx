import "./App.css";

import netflix from "./assets/netflix.json";
import Section from "./components/Section";

function App() {
  // const netflixComedies = netflix[1].images[0];

  // Le tableau d'objet Netflix n'est pas affichable par react

  // J'utilise map pour transformer Netflix

  const tabMadeWithMap = netflix.map((elem) => {
    // console.log(elem);

    return (
      <>
        <section>
          <p>{elem.category}</p>

          <div className="pictures">
            {elem.images.map((elem2) => {
              return <img src={elem2} />;
            })}
          </div>
        </section>
      </>
    );
  });

  // J'utilise map créer un nouveau tableau d'objets [ [url1, url2, etc] , [url3, url 4, url 5, etc], [url 6, url7, url 8, etc], etc]

  return <>{tabMadeWithMap}</>;
}

export default App;
