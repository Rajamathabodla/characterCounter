import './index.css'

const Word = props => {
  const {details} = props
  return (
    <li className="textList">
      <p>
        {details.input} : {details.input.length}{' '}
      </p>
    </li>
  )
}

export default Word
