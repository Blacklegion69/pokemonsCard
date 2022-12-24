import "./style.css";
export default function Card(props) {
  const number = props.number;
  const normal = props.normal;
  const animated = props.animated;
  const large = props.large;
  const evolution = "null";
  const name = props.name;
  const type = props.type;
  const total = props.total;
  const hp = props.hp;
  const attack = props.attack;
  const defense = props.defense;
  const sp_atk = props.sp_atk;
  const sp_def = props.sp_def;
  const speed = props.speed;
  return (
    <div className="container">
      <div className="number">{number}</div>
      <div className="images">
        <div className="dual">
          <img className="normal" src={normal} alt="its a normal image" />
          <img
            className="gif"
            src={animated}
            alt="its a normal animated image"
          />
        </div>
        <div className="largeimage">
          <img className="large" src={large} alt="its a large image" />
        </div>
      </div>
      <div className="information">
        <div className="infocontainer">
          <div className="box">Evolution</div>:
          <div className="box">{evolution}</div>
        </div>

        <div className="infocontainer">
          <div className="box">Name</div>:<div className="box">{name}</div>
        </div>

        <div className="infocontainer">
          <div className="box">Type</div>:
          <div className="box">{type[0] + "," + type[1]}</div>
        </div>

        <div className="infocontainer">
          <div className="box">Total</div>:<div className="box">{total}</div>
        </div>

        <div className="infocontainer">
          <div className="box">Hp</div>:<div className="box">{hp}</div>
        </div>

        <div className="infocontainer">
          <div className="box">Attack</div>:<div className="box">{attack}</div>
        </div>

        <div className="infocontainer">
          <div className="box">Defence</div>:
          <div className="box">{defense}</div>
        </div>

        <div className="infocontainer">
          <div className="box">sp_atk</div>:<div className="box">{sp_atk}</div>
        </div>

        <div className="infocontainer">
          <div className="box">sp_def</div>:<div className="box">{sp_def}</div>
        </div>

        <div className="infocontainer">
          <div className="box">speed</div>:<div className="box">{speed}</div>
        </div>
      </div>
    </div>
  );
}
