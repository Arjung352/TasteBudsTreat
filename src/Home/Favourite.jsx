import ActionAreaCard from "./Card";
import name from "./name";
function Favourite() {
  return (
    <div className="flex flex-col items-center">
      <p className=" text-6xl mb-7 mt-6 salsa-regular">
        Some Of My Favourite Dishes
      </p>
      <div className="flex flex-wrap justify-center">
        {name.map((value, index) => (
          <ActionAreaCard
            key={index}
            img={value.img}
            about={value.about}
            name={value.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
