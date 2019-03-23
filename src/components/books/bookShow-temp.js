<main className="section">
  <div className="container">
    <h2 className="title">{book.title}</h2>
    <hr />
    <div className="columns">
      <div className="column is-half">
        <figure className="image">
          <img src={cheese.image} alt={cheese.name} />
        </figure>
      </div>
      <div className="column is-half">
        <h4 className="title is-4">Tasting Notes</h4>
        <p>{cheese.tastingNotes}</p>
        <hr />

        <h4 className="title is-4">Origin</h4>
        <p>{cheese.origin}</p>
        <hr />
        {this.isOwner() && <Link className="button is-warning" to={`/cheeses/${cheese._id}/edit`}>Edit</Link>}
        {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
      </div>
    </div>
  </div>
</main>
)



      <h4 className="title is-6">{book.title}</h4>
      <h5 className="title is-7">by: {book.authors[0]}</h5>
      <h5 className="subtitle is-7">Genre: {book.genre}</h5>
      <h5 className="subtitle is-7">{book.fiction ? 'Fiction' : 'Non-fiction'}</h5>
      <h5 className="subtitle is-7">Rating: {book.rating[0].rating}</h5>
      <h5 className="subtitle is-7">Location: {book.owner.location}</h5>
      <h5 className="subtitle is-7">Return Date: {book.returnDate}</h5>






        </div>
      ))}
    </div>
  </div>
</main>
