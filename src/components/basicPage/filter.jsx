import { useState } from "react";

const Filter = () => {

  const initial = {
    artist: false,
    year: false,
    genre: false,
  };
  const [clicks, setClicks] = useState(initial)

  const handClick = (e) => {
    const key = e.target.name
    setClicks((prev) => ({ ...initial, [key]: !prev[key] }))
  }

    return (
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по: &nbsp; &nbsp;</div>
        <div className="dropdown_menu">
        <button
          onClick={handClick}
          name="artist"
          className={`filter__button button-author _btn-text dropbtn ${clicks.artist? "button-active" : ""}`}
        >
          исполнителю
        </button>
        <div id="myDropdown" className={`dropdown-content ${clicks.artist? "show" : ""}`}>
          <p>Michael Jackson </p>
          <p> Frank Sinatra </p>
          <p>Calvin Harris </p>
          <p>Zhu </p>
          <p>Arctic Monkeys</p>
        </div>
      </div>
      <div className="filter__title-year">
        <button
          onClick={handClick}
          name="year"
          className={`filter__button button-author _btn-text dropbtn ${clicks.year? "button-active" : ""}`}
        >
          году выпуска
        </button>
        <div id="myDropdown" className={`dropdown-content-year ${clicks.year? "show-year" : ""}`}>
          <fieldset className="select-year">
            <input type="radio" id="New" name="Tracks" className="input-year"/>
          <label>Более новые &nbsp;</label>
          <input type="radio" id="Old" name="Tracks" className="input-year"/>
          <label>Более старые</label>
          </fieldset>
          
        </div>
      </div>
      <div className="filter__title">
        <button
          onClick={handClick}
          name="genre"
          className={`filter__button button-author _btn-text dropbtn ${clicks.genre? "button-active" : ""}`}
        >
          жанру
        </button>
        <div id="myDropdown" className={`dropdown-content ${clicks.genre? "show" : ""}`}>
        <p>Рок </p>
          <p> Хип-хоп </p>
          <p>Поп-музыка </p>
          <p>Техно </p>
          <p>Инди</p>
        </div>
      </div>
      </div>
    )
  }
  export default Filter
  