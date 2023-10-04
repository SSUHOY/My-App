import { useState } from "react";
import * as S from "./filter.styled";

const Filter = ({ tracks, value, onClickCategory, artistList }) => {

  const initial = {
    artist: false,
    year: false,
    genre: false,
  };


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
        <S.DropDownBtn
          onClick={handClick}
          name="artist"
          className={clicks.artist ? "active" : ""}>
          исполнителю
          </S.DropDownBtn>
        <S.DropdownContentBox
          id="myDropdown"
          className={
            clicks.artist ? "show" : ""
          }>
            <S.DropdownList>
            {artistList.map((artistNames, i) => (
              <li
              key={i}
              onClick={() => onClickCategory(artistNames)}
              className={value === i ? "underline" : ""}>
             {artistNames} 
              </li>
             ))}
          
            </S.DropdownList>
            </S.DropdownContentBox>
      </S.DropdownMenu>
      <S.FilterTitle>
      <S.DropDownBtn
          onClick={handClick}
          name="year"
          className={clicks.year ? "active" : ""}>
          году выпуска
          </S.DropDownBtn>
          <S.DropdownContentBox
          id="myDropdown"
          className={clicks.year ? "show-year" : ""}>
          <S.FieldSetRadio className="select-year">
          <S.InputRadio
              type="radio"
              id="Default"
              name="Tracks"
              className="input-year"
            />
            <label>По умолчанию &nbsp;</label>
            <S.InputRadio
              type="radio"
              id="New"
              name="Tracks"
              className="input-year"
            />
            <label>Сначала новые &nbsp;</label>
            <S.InputRadio
              type="radio"
              id="Old"
              name="Tracks"
              className="input-year"
            />
            <label>Сначала старые</label>
          </S.FieldSetRadio>
          </S.DropdownContentBox>
      </S.FilterTitle>
      <S.FilterTitle>
      <S.DropDownBtn
          onClick={handClick}
          name="genre"
          className={clicks.genre ? "active" : ""}>
          жанру
       </S.DropDownBtn>
       <S.DropdownContentBox
          id="myDropdown"
          className={clicks.genre ? "show-genres" : ""}>
          <S.DropdownListGenres>
            {genres.map((genreName, i) => (
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={value === i ? "underline" : ""}>
                {genreName}
              </li>
            ))}
         </S.DropdownListGenres>
        </S.DropdownContentBox>
      </S.FilterTitle>
    </S.CenterBlockFilter>
  );
};
export default Filter;

  