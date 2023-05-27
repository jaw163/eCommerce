import Review from "../../components/Reviews/Review"
import styles from "../../styles/ProductPage.module.css"
import AuthContext from "../../context/AuthContext"
import { useContext } from "react"

export default function ReviewSection({
  averageRating,
  reviewsLength,
  router,
  product,
  reviews,
  setShown,
}) {
  const { user } = useContext(AuthContext)

  return (
    <div className={styles["review-section"]}>
      <div className={styles["review-header"]}>
        <h2>Reviews</h2>
        {averageRating ? (
          <div>
            <div className={styles["average-rating-display"]}>
              <p className={styles.rating}>{`${averageRating.toFixed(1)}`}</p>
              <p>out of 5</p>
            </div>
            <p>{`Based on ${reviewsLength} reviews`}</p>
          </div>
        ) : (
          <p>No reviews yet...</p>
        )}
        <button
          onClick={user ? () => setShown(true) : () => router.push("/login")}
          className={styles["review-button"]}
        >
          Write a review
        </button>
      </div>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} product={product} />
        ))}
      </div>
    </div>
  )
}