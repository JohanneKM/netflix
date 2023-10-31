import netflix from "../assets/netflix.json";

const Section = () => {
  return (
    <>
      {netflix.map((elem) => {
        return (
          <section>
            <h2> {elem.category} </h2>;
            <div className="pictures">
              {elem.images.map((elem2) => {
                return <img src={elem2} />;
              })}
            </div>
          </section>
        );
      })}
      ;
    </>
  );
};

export default Section;
