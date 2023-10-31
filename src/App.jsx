import "./App.css";

import netflix from "./assets/netflix.json";

function App() {
  const netflixComedies = netflix[1].images[0];

  // Le tableau d'objet Netflix n'est pas affichable par react

  // J'utilise map pour transformer Netflix

  const tabMadeWithMap = netflix.map((elem) => {
    return <p> {elem.images[0]} </p>;
  });

  return (
    <>
      <p> {tabMadeWithMap[0]} </p>
      <p> {'"' + tabMadeWithMap[0] + '"'}</p>
      <img
        src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1643642943/react-new-exercices/netflix2022/reprendre%20avec/AAAABd4eOiOZFaZT1-9l68Ra0uC-4kl3zMSPkeA5TyDu8v_KNgAAvifmM8boe5G2kexKSdk2uznXcDIJIlBoz4RA6p-q0_E_xg9maq.webp"
        alt="img-netflix"
      />
      <img src={tabMadeWithMap[0]} alt="img-netflix" />;
      <img src={"} {tabMadeWithMap[0]} {"} alt="img-netflix" />;
      <img src="{tabMadeWithMap[0]}" alt="img-netflix" />;
    </>
  );
}

export default App;
