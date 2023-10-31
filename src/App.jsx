import "./App.css";

import netflix from "./assets/netflix.json";

function App() {
  const netflixComedies = netflix[1].images[0];

  // Le tableau d'objet Netflix n'est pas affichable par react

  // J'utilise map pour transformer Netflix

  const tabMadeWithMap = netflix.map((elem) => {
    // console.log(elem);

    return <p> {elem.category} </p>;
  });

  // TEST TEST TEST
  const arrayOfImages = netflix[0].images;

  const firstUrl = arrayOfImages[0];
  const secondUrl = arrayOfImages[1];

  // J'utilise map créer un nouveau tableau d'objets [ [url1, url2, etc] , [url3, url 4, url 5, etc], [url 6, url7, url 8, etc], etc]

  const arrayOfImagesMadeWithMap = netflix.map((elem) => {
    console.log(elem);
    return <p> {elem.images} </p>;
  });

  return (
    <>
      {tabMadeWithMap[0]};
      <img src={firstUrl} alt="img-netflix" />
      <img src={secondUrl} alt="img-netflix" />
      {arrayOfImagesMadeWithMap[0]};
    </>
  );
}

export default App;
