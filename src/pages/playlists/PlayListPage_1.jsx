import { useParams } from 'react-router-dom'
import * as S from "../../components/styles/mainMenu/mainMenuStyles"

export const Playlist = () => {
  console.log(useParams())

  const { id } = useParams()

  return (
    <S.Main>   
    <div>
      <h1>CategoryPage {id}</h1>
      </div>
      </S.Main>   
  )
}