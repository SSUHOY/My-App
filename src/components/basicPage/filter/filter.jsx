import { useState } from "react";
import * as S from "./filter.styled";

const Filter = ({
  selectedFilters,
  onClickCategory,
  artistList,
  genreList,
  value
}) => {
  const [clicks, setClicks] = useState(selectedFilters || {});
  console.log(clicks.year);

  const handClick = (category) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [category]: !prevClicks[category],
    }));
  };

  const [activeIndex, setActiveIndex] = useState(null);
  console.log(activeIndex);
  // const genres = ["Классическая музыка", "Электронная музыка", "Рок музыка"];

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по: &nbsp; &nbsp;</S.FilterTitle>
      <S.DropdownMenu>
        <S.DropDownBtn
          onClick={() => handClick("artist")}
          name="artist"
          className={clicks.artist ? "active" : ""}>
          исполнителю
        </S.DropDownBtn>
        <S.DropdownContentBox
          id="myDropdown"
          className={clicks.artist ? "show" : ""}>
          <S.DropdownList>
            {artistList.map((artistNames, i) => (
              <li
                key={i}
                onClick={() => {
                  onClickCategory("artist", artistNames);
                }}
                className={value === i  ? "underline" : ""}>
                {artistNames}
              </li>
            ))}
          </S.DropdownList>
        </S.DropdownContentBox>
      </S.DropdownMenu>
      <S.FilterTitle>
        <S.DropDownBtn
          onClick={() => handClick("year")}
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
              id="New"
              name="Tracks"
              checked={selectedFilters.year === "New"}
              className="input-year"
              onChange={() => onClickCategory("year", "New")}
            />
            <label>Сначала новые &nbsp;</label>
            <S.InputRadio
              type="radio"
              id="Old"
              name="Tracks"
              checked={selectedFilters.year === "Old"}
              className="input-year"
              onChange={() => onClickCategory("year", "Old")}
            />
            <label>Сначала старые</label>
          </S.FieldSetRadio>
        </S.DropdownContentBox>
      </S.FilterTitle>
      <S.FilterTitle>
        <S.DropDownBtn
          onClick={() => handClick("genre")}
          name="genre"
          className={clicks.genre ? "active" : ""}>
          жанру
        </S.DropDownBtn>
        <S.DropdownContentBox
          id="myDropdown"
          className={clicks.genre ? "show-genres" : ""}>
          <S.DropdownListGenres>
            {genreList.map((genreName, i) => (
              <li
                key={i}
                onClick={() => onClickCategory("genre", genreName)}
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
