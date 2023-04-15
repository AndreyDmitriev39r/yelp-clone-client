import StarRating from "../StarRating";

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "33%"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Dummy reviewer</span>
          <span><StarRating /></span>
        </div>
        <div className="card-body">
          <p className="card-text">Dummy review text</p>
        </div>
      </div>

      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "33%"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Dummy reviewer</span>
          <span><StarRating /></span>
        </div>
        <div className="card-body">
          <p className="card-text">Dummy review text</p>
        </div>
      </div>

      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "33%"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Dummy reviewer</span>
          <span><StarRating /></span>
        </div>
        <div className="card-body">
          <p className="card-text">Dummy review text</p>
        </div>
      </div>

      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "33%"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Dummy reviewer</span>
          <span><StarRating /></span>
        </div>
        <div className="card-body">
          <p className="card-text">Dummy review text</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews;