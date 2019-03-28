import React from 'react'
import UserEditMap from '../common/userEditMap'

const UserForm = ({ currentUser, handleChange, handleSubmit, mapCenter, handleLocation, errors }) => {
  {console.log('handlelocation', handleLocation)}
  {console.log('currentUser', currentUser)}
  return (
    <form
      onSubmit={handleSubmit}
    >

      <div>
        <input
          className={`input ${errors.profilePicture ? 'is-danger': ''}`}
          name="profilePicture"
          value={currentUser.profilePicture || ''}
          placeholder="Please submit a new Profile Picture (optional)"
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <input
          className={`input ${errors.email ? 'is-danger': ''}`}
          name="email"
          value={currentUser.email || ''}
          placeholder="Please enter your Email Address *required)"
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>Where are your books located? (drag pointer)</label>
        <UserEditMap
          center={mapCenter}
          onSelectLocation={handleLocation}
        />
      </div>
      <br />

      <div>
        <input
          className={`input ${errors.libraryName ? 'is-danger': ''}`}
          name="libraryName"
          value={currentUser.libraryName || ''}
          placeholder="Please enter a Library Name *required)"
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <p>Library Description: <br />
          <textarea
            className={`textarea ${errors.libraryDescription ? 'is-danger': ''}`}
            name="libraryDescription"
            value={currentUser.libraryDescription || ''}
            placeholder="Please enter a description of your library (optional)"
            onChange={handleChange}
          />
        </p>
      </div>
      <br />

      <div>
        <input
          className={`input ${errors.libraryPicture ? 'is-danger': ''}`}
          name="libraryPicture"
          value={currentUser.libraryPicture || ''}
          placeholder="Picture of your library (optional)"
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <button className="button is-primary is-pulled-right">Submit</button>
      </div>

    </form>
  )
}

export default UserForm
