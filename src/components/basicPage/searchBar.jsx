import * as S from "../styles/basicPage/basicPageStyles"

const SearchBar = () => {
    return (
      <S.CenterBlock >
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterBlock>
    )
  }
  
  export default SearchBar
  