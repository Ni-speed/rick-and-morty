import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    <div>
      <div>
        <Link to={'/characters'}>Character</Link>
        <Link to={'/locations'}>Location</Link>
        <Link to={'/episodes'}>Episode</Link>
      </div>
    </div>
  )
}
