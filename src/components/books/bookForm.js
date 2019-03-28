import React from 'react'
//
const BookForm = ({handleChange, handleSubmit, handleRatingChange, handleReviewChange, handleSwitch, genres, data, errors}) => {
  {console.log('bookform data', data)}
  {console.log('bookform errors', errors)}
  if (!data.owner) return null
  return (

    <form onSubmit={handleSubmit}>
      <div className="columns">
        <div className="column">
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
          <input
            className={`input ${errors.authors ? 'is-danger': ''}`}
            name="authors"
            placeholder="Authors"
            value={data.authors || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
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
        onChange={handleRatingChange}>Rating: {data.rating.rating && data.rating.rating}
        <br />
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
        <button className="button is-success is-pulled-right">Submit</button>
      </div>

    </form>
  )
}
// button disabled={!data.genre}

export default BookForm
