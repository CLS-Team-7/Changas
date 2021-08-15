export default function AddFormReview (props) {

    return (
        <li>
        {userInfo ? (
          <form className="form" onSubmit={submitHandler}>
            <div>
              <h2>Deja una reseña</h2>
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="1">1- Poor</option>
                <option value="2">2- Fair</option>
                <option value="3">3- Good</option>
                <option value="4">4- Very good</option>
                <option value="5">5- Excelent</option>
              </select>
            </div>
            <div>
              <label htmlFor="comment">Comentario</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Submit
              </button>
            </div>
            <div>
              {loadingReviewCreate && <LoadingBox></LoadingBox>}
              {errorReviewCreate && (
                <MessageBox variant="danger">
                  {errorReviewCreate}
                </MessageBox>
              )}
            </div>
          </form>
        ) : (
          <MessageBox>
            Please <Link to="/signin">Sign In</Link> to write a review
          </MessageBox>
        )}
      </li>
    )
}