import { useState } from "react";
import * as S from "../styles/basicPage/filterStyles";

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
      <S.CenterBlockFilter>
        <S.FilterTitle className="filter__title">Искать по: &nbsp; &nbsp;</S.FilterTitle>
        <div className="dropdown_menu">
        <button
          onClick={handClick}
          name="artist"
          className={`filter__button button-author _btn-text dropbtn ${clicks.artist? "button-active" : ""}`}
        >
          исполнителю
        </button>
        <div id="myDropdown" className={`dropdown-content scrollbar ${clicks.artist? "show" : ""}`}>
          <ul className="dropdown-content_li">
            <li>Michael Jackson</li>
            <li>Calvin Harris</li>
            <li>Zhu</li>
            <li>Arctic Monkeys</li>
            <li>Michael Jackson</li>
            <li>Frank Sinatra</li>
            <li>Arctic Monkeys</li>
          </ul>
        </div>
      </div>
      <S.FilterTitle>
        <button
          onClick={handClick}
          name="year"
          className={`filter__button button-author _btn-text dropbtn ${clicks.year? "button-active" : ""}`}
        >
          году выпуска
        </button>
        <div id="myDropdown" className={`dropdown-content-year ${clicks.year? "show-year" : ""}`}>
          <S.FieldSetRadio className="select-year">
            <S.InputRadio type="radio" id="New" name="Tracks" className="input-year"/>
          <label>Более новые &nbsp;</label>
          <S.InputRadio type="radio" id="Old" name="Tracks" className="input-year"/>
          <label>Более старые</label>
          </S.FieldSetRadio>
          
        </div>
      </S.FilterTitle>
      <S.FilterTitle className="filter__title">
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
      </S.FilterTitle>
      </S.CenterBlockFilter>
    )
  }
  export default Filter
  