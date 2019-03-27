import React from 'react'
//
const BookForm = ({ data, handleChange, handleSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="columns">
        <div className="column">
          <input
            className="input"
            name="title"
            placeholder="*Title"
            value={this.state.data.title}
            onChange={this.handleChange}
          />
        </div>

        <div className="column">
          <input
            className="input"
            name="authors"
            placeholder="*Author(s)"
            value={this.state.data.authors}
            onChange={this.handleChange}
          />
        </div>
      </div>

      <div>
        <input
          className="input"
          name="image"
          placeholder="*Cover Image (url)"
          value={this.state.data.image}
          onChange={this.handleChange}
        />
      </div>
      <br />

      <div className="columns">
        <div className="column is-3">
          <div className="control">
            <div className="select">
              <select
                name="genre"
                onChange={this.handleChange}>
                {this.state.genres && this.state.genres.map(genre => (
                  <option key={genre._id} value={genre._id}>{genre.genre}</option>
                ))}
              </select>
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
                onChange={this.handleSwitch}
              />
              <label htmlFor="fiction">{this.state.data.fiction ? 'Fiction' : 'Non-Fiction' }</label>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div>
        <textarea
          className="textarea"
          name="description"
          placeholder="Description"
          value={this.state.data.description}
          onChange={this.handleChange}
        />
      </div>
      <br />
      <hr />

      <div className="control"
        onChange={this.handleRatingChange}>Rating: {this.state.data.rating.rating && this.state.data.rating.rating}
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
          value={this.state.data.review.review}
          onChange={this.handleReviewChange}
        />
      </div>
      <br />

      <div>
        <button className="button is-warning is-pulled-right">Edit Book</button>
      </div>
    </form>
  )
}


export default BookForm
