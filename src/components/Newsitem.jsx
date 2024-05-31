import pic from '../assets/news-paper.jpg'

const Newsitem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth : "435px"}}>
  <img src={src?src:pic} style={{height : "200px", width: "410px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,100):"NewsPulse keeps you informed with up-to-the-minute news, in-depth reports, and a seamless user experience for the modern news consumer."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
export default Newsitem