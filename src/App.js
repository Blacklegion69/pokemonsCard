import React from "react";
import Card from "./components/Card.jsx";
import Data from "./pokemons.json";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const items = Data.map((item) => {
    return (
      <Card
        number={item.national_number}
        normal={item.sprites.normal}
        animated={item.sprites.animated}
        large={item.sprites.large}
        evolution={item.evolution}
        name={item.name}
        type={item.type}
        total={item.total}
        hp={item.hp}
        attack={item.attack}
        defense={item.defense}
        sp_atk={item.sp_atk}
        sp_def={item.sp_def}
        speed={item.speed}
      />
    );
  });
  return (
    <>
      <Navbar />
      {items}
    </>
  );
};

export default App;
