import React from 'react'
//
const BookForm = ({handleChange, handleSubmit, handleRatingChange, handleReviewChange, handleSwitch, genres, data, errors}) => {

  if (!data.owner) return null
  return (

    <form onSubmit={handleSubmit}>
      <div className="columns">
        <div className="column">
          <label className="label">Title</label>
          <input
            className={`input ${errors.title ? 'is-danger': ''}`}
            name="title"
            placeholder="Title (required)"
            value={data.title || ''}
            onChange={handleChange}
          />
          {errors.title && <small className="help is-danger">Please enter a title</small> }
        </div>

        <div className="column">
          <label className="label">Author(s)</label>
          <input
            className={`input ${errors.authors ? 'is-danger': ''}`}
            name="authors"
            placeholder="Author(s)"
            value={data.authors || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="label">Image</label>
        <input
          className={`input ${errors.image ? 'is-danger': ''}`}
          name="image"
          placeholder="Image URL"
          value={data.image || ''}
          onChange={handleChange}
        />
      </div>
      <br />

      <div className="columns">
        <div className="column is-3">
          <div className="control">
            <label className="label">Genre</label>
            <div className="select">
              <select
                name="genre"
                defaultValue={data.genre._id || 'default'}
                onChange={handleChange}>
                <option disabled value="default">Choose a genre</option>
                {genres && genres.map(genre => (
                  <option key={genre._id} value={genre._id}>{genre.genre}</option>
                ))}
              </select>
              {errors.genre && <small className="help is-danger">Please choose a genre</small> }
            </div>
          </div>
        </div>

        <div className="column is-3">
          <div className="control">
            <label className="label">Fiction</label>
            <div className="field">
              <input
                id="fiction"
                type="checkbox"
                name="fiction"
                className="switch is-medium is-success"
                onChange={handleSwitch}
              />
              <label htmlFor="fiction">{data.fiction ? 'Fiction' : 'Non-Fiction' }</label>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div>
        <label className="label">Description</label>
        <textarea
          className={`textarea ${errors.description ? 'is-danger': ''}`}
          name="description"
          placeholder="Description"
          value={data.description || ''}
          onChange={handleChange}
        />
      </div>
      <br />
      <hr />

      <div className="control"
        onChange={handleRatingChange}><label className="label">Rating: {data.rating.rating && data.rating.rating}</label>
        <label className="radio">
          <input type="radio" name="rating" value="1"/>
        </label>
        <label className="radio">
          <input type="radio" name="rating" value="2"/>
        </label>
        <label className="radio">
          <input type="radio" name="rating" value="3"/>
        </label>
        <label className="radio">
          <input type="radio" name="rating" value="4"/>
        </label>
        <label className="radio">
          <input type="radio" name="rating" value="5"/>
        </label>
      </div>
      <br />

      <div>
        <label className="label">Review</label>
        <textarea
          className="textarea"
          name="review"
          placeholder="Review"
          value={data.review.review}
          onChange={handleReviewChange}
        />
      </div>
      <br />

      <div>
        <button className="button is-success is-pulled-right">Save &#43;</button>
      </div>

    </form>
  )
}
// button disabled={!data.genre}

export default BookForm
