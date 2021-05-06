<section className={styles.center}>
  <form onSubmit={handleSubmit} className="col s12">
    <div className="divider"></div>
    <label htmlFor="name" className="input-field col s6">
      Name
      <input
        required
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        ref={nameRef}
      />
    </label>

    <label htmlFor="bio" className="input-field col s6">
      Bio
      <textarea
        id="bio"
        name="bio"
        type="text"
        placeholder="Bio"
        ref={bioRef}
        className="materialize-textarea"
      />
    </label>
    <label htmlFor="avatar">
      <span>Profile picture &nbsp; </span>
      <div className="btn-small file-field input-field blue">
        <span>Choose file</span>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          ref={profilePictureRef}
        />
      </div>
    </label>
    <br />
    <button type="submit" className="btn blue">
      Save
    </button>
  </form>
  <form onSubmit={handleSubmitPasswordChange}>
    <label htmlFor="oldpassword">
      Old Password
      <input type="password" name="oldPassword" id="oldpassword" required />
    </label>
    <label htmlFor="newpassword">
      New Password
      <input type="password" name="newPassword" id="newpassword" required />
    </label>
    <button type="submit" className="btn blue">
      Change Password
    </button>
  </form>
</section>;
