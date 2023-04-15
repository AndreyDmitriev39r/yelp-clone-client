const StarRating = () => {
  const rating = 4;//dynamic later  
  const stars = Array(5).fill(null)
    .map((_, index) => <i key={index + 1}
      className={index + 1 <= rating ? "fas fa-star"
        : index + 1 === Math.ceil(rating) && !Number.isInteger(rating) ? "fas fa-star-half-alt"
        : "far fa-star"}></i>);
  return (
    <>{stars}</>
  )
}

export default StarRating;
