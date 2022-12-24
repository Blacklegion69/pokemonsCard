import React from "react";
import Card from "./components/Card.jsx";
import Data from "./pokemons.json";
function App() {
  const items = [];
  for (var x = 0; x < 500; x++) {
    items.push(
      <Card
        number={Data[x].national_number}
        normal={Data[x].sprites.normal}
        animated={Data[x].sprites.animated}
        large={Data[x].sprites.large}
        evolution={Data[x].evolution}
        name={Data[x].name}
        type={Data[x].type}
        total={Data[x].total}
        hp={Data[x].hp}
        attack={Data[x].attack}
        defense={Data[x].defense}
        sp_atk={Data[x].sp_atk}
        sp_def={Data[x].sp_def}
        speed={Data[x].speed}
      />
    );
  }
  return (
    <>
      <div className="main">{items}</div>
    </>
  );
}

export default App;
