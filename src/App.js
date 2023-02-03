import logo from './logo.svg';
import './App.css';

function App() {
    
  let mobiles = [
    {
      name: "a30",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 2000,
      brand: "samsung",
    },
    {
      name: "note10",
      ram: "6gb",
      rom: "128gb",
      camera: "50px",
      price: 4000,
      brand: "samsung",
    },
    {
      name: "s10",
      ram: "3gb",
      rom: "128gb",
      camera: "10px",
      price: 5000,
      brand: "samsung",
    },
    {
      name: "iphone4",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "iphone",
    },
    {
      name: "iphone4s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 20000,
      brand: "iphone",
    },
    {
      name: "iphone5",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone",
    },
    {
      name: "iphone6",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone",
    },
    {
      name: "redminote10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "redminote11",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "redmi10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "redmi10pro",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "a3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "oppo",
    },
    {
      name: "a3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Realmi",
    },
  ];
   return(
    <div>
      <header className='App-header'>
      {mobiles.map((x, i) => {
        return(
          <div key={i} className="card">
            <h1 className="heading">{x.brand}</h1>
            <h2>{x.name}</h2>
            <h2>{x.camera}</h2>
            <h2>{x.price}</h2>

          </div>
        )
      })}
      </header>
    </div>
   )
}
