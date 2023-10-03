import { useState } from "react";
import * as S from "./filter.styled";

const Filter = ({ tracks, value, onClickCategory, artistList }) => {

  const initial = {
    artist: false,
    year: false,
    genre: false,
  };
console.log(artistList);


  const [clicks, setClicks] = useState(initial);
  const [activeIndex, setActiveIndex] = useState(0);

  const genres = ["Классическая музыка", "Электронная музыка", "Рок музыка"];

  const handClick = (e) => {
    const key = e.target.name;
    setClicks((prev) => ({ ...initial, [key]: !prev[key] }));
  };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по: &nbsp; &nbsp;</S.FilterTitle>
      <S.DropdownMenu>
        <button
          onClick={handClick}
          name="artist"
          className={`filter__button button-author _btn-text dropbtn ${
            clicks.artist ? "button-active" : ""
          }`}>
          исполнителю
        </button>
        <div
          id="myDropdown"
          className={`dropdown-content ${
            clicks.artist ? "show" : ""
          }`}>
            <S.DropdownList>
            {artistList.map((artistNames, i) => (
              <li
              key={i}
              onClick={() => onClickCategory(i)}>
             {artistNames} 
              </li>
             ))}
          
            </S.DropdownList>
        </div>
      </S.DropdownMenu>
      <S.FilterTitle>
        <button
          onClick={handClick}
          name="year"
          className={`filter__button button-author _btn-text dropbtn ${
            clicks.year ? "button-active" : ""
          }`}>
          году выпуска
        </button>
        <div
          id="myDropdown"
          className={`dropdown-content-year ${clicks.year ? "show-year" : ""}`}>
          <S.FieldSetRadio className="select-year">
            <S.InputRadio
              type="radio"
              id="New"
              name="Tracks"
              className="input-year"
            />
            <label>Более новые &nbsp;</label>
            <S.InputRadio
              type="radio"
              id="Old"
              name="Tracks"
              className="input-year"
            />
            <label>Более старые</label>
          </S.FieldSetRadio>
        </div>
      </S.FilterTitle>
      <S.FilterTitle>
        <button
          onClick={handClick}
          name="genre"
          className={`filter__button button-author _btn-text dropbtn ${
            clicks.genre ? "button-active" : ""
          }`}>
          жанру
        </button>
        <div
          id="myDropdown"
          className={`dropdown-content ${clicks.genre ? "show" : ""}`}>
          <S.DropdownListGenres>
            {genres.map((genreName, i) => (
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={activeIndex === i ? "underline" : ""}>
                {genreName}
              </li>
            ))}
         </S.DropdownListGenres>
        </div>
      </S.FilterTitle>
    </S.CenterBlockFilter>
  );
};
export default Filter;

  