import { useState } from "react";
import * as S from "./filter.styled";

const Filter = ({
  selectedFilters,
  onClickCategory,
  artistList,
  genreList,
  value,
  selectedArtists,
  onArtistClick,
  onGenreClick,
  selectedGenres
}) => {
  const [clicks, setClicks] = useState(selectedFilters || {});

  const handClick = (category) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [category]: !prevClicks[category],
    }));
  };

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
                onClick={() => onArtistClick(artistNames)}
                className={
                  selectedArtists?.includes(artistNames) ? "underline": " "
                }>
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
              id="Default"
              name="Tracks"
              checked={selectedFilters.year === "Default"}
              className="input-year"
              onChange={() => onClickCategory("year", "Default")}
            />
            <label>По умолчанию &nbsp;</label>
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
                onClick={() => onGenreClick(genreName)}
                className={
                  selectedGenres?.includes(genreName) ? "underline": " "
                }>
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
