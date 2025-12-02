import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [cities, setCities] = useState(() => {
    const saved = localStorage.getItem("weatherCities");
    return saved ? JSON.parse(saved) : [];
  });

  const [unrelatedCount, setUnRelatedCount] = useState(0);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("weatherCities", JSON.stringify(cities));
  }, [cities]);

  function handleAddCity(e) {
    e.preventDefault();
    setSearchCount(searchCount + 1);
    const trimmed = cityInput.trim();
    if (!trimmed) return;
    if (cities.includes(trimmed.toLowerCase())) return;

    setCities([...cities, trimmed.toLowerCase()]);
    setCityInput("");
  }

  function handleRemove(cityToRemove) {
    setCities(cities.filter((c) => c !== cityToRemove));
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Mi Dashboard del Clima</h1>
      <hr></hr>
      <strong>Contador ajeno:</strong>
      {unrelatedCount}
      <br></br>
      <button onClick={() => setUnRelatedCount(unrelatedCount + 1)}>
        Incrementar +
      </button>
      <br></br>
      <span>
        Este contador cambia el estado de App, pero las WeatherCards NO se
        re-renderizan con React.Memo
      </span>
      <hr></hr>
      <p>Busca una ciudad y guárdala en tu lista</p>
      <span>{`Llevas ${searchCount} tokens de búsqueda`}</span>
      <form onSubmit={handleAddCity} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        ></input>
        <button type="submit">Agregar Ciudad</button>
        <button
          type="button"
          onClick={() => {
            setCities([]);
          }}
        >
          Limpiar
        </button>
      </form>
      {/* Render de tarjetas */}
      {cities.length === 0 ? (
        <p>Todavía no hay ciudades guardadas</p>
      ) : (
        cities.map((city) => {
          return (
            <div key={city}>
              <button onClick={() => handleRemove(city)}> X </button>
              <WeatherCard city={city} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
