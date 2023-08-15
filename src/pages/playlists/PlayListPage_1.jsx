import { useParams } from 'react-router-dom'

export const Playlist = () => {
  console.log(useParams())

  const { id } = useParams()

  return (
    <div>
      <h1>CategoryPage {id}</h1>
    </div>
  )
}