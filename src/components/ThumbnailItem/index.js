// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, getBigImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickChange = () => {
    getBigImageId(id)
  }

  return (
    <li className="list">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickChange}
      >
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
