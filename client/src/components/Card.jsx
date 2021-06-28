function Card(props) {
  const {title, description, author, img_url } = props
  return (
    <div className="card">
      <img src={img_url}className="card_img" />
      <div className="card_body">
        <h2 className="title">{title }</h2>
        <p className="card_description">{description }</p>
        <h3 className="card_author">{author }</h3>
        <button className="card_btn"></button>
        </div>
    </div>
  )
}