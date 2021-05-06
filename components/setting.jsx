import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useCurrentUser } from "../lib/hooks";
import styles from "../styles/Setting.module.css";

const ProfileSection = () => {
  const [user, { mutate }] = useCurrentUser();
  const [loading, isLoading] = useState(false);
  const nameRef = useRef();
  const bioRef = useRef();
  const profilePictureRef = useRef();
  const [msg, setMsg] = useState({ message: "", isError: false });

  useEffect(() => {
    nameRef.current.value = user.name;
    bioRef.current.value = user.bio;
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    isLoading(true);
    const formData = new FormData();
    if (profilePictureRef.current.files[0]) {
      formData.append("profilePicture", profilePictureRef.current.files[0]);
    }
    formData.append("name", nameRef.current.value);
    formData.append("bio", bioRef.current.value);

    const res = await fetch("/api/user", {
      method: "PATCH",
      body: formData,
    });
    if (res.status === 200) {
      const userData = await res.json();
      mutate({
        user: {
          ...user,
          ...userData.user,
        },
      });
      setMsg({ message: "Profile updated" });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
    isLoading(false);
  };

  const handleSubmitPasswordChange = async (e) => {
    isLoading(true);
    e.preventDefault();
    const body = {
      oldPassword: e.currentTarget.oldPassword.value,
      newPassword: e.currentTarget.newPassword.value,
    };
    e.currentTarget.oldPassword.value = "";
    e.currentTarget.newPassword.value = "";

    const res = await fetch("/api/user/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: "Password updated" });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
    isLoading(false);
  };

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      {loading ? (
        <div className="progress" style={{ margin: 0 }}>
          <div className="indeterminate">Loading, Please Wait</div>
        </div>
      ) : null}
      <h2>Edit Profile</h2>
      {msg.message ? (
        <p
          style={{
            color: msg.isError ? "red" : "#0070f3",
            textAlign: "center",
          }}
        >
          {msg.message}
        </p>
      ) : null}
      <div className={styles.profileBx}>
        <form onSubmit={handleSubmit} className="">
          <div className={styles.textField}>
            <label htmlFor="name">
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
          </div>
          <div className={styles.textField}>
            <label htmlFor="bio">
              Bio
              <textarea
                id="bio"
                name="bio"
                type="text"
                placeholder="Bio"
                ref={bioRef}
                required
                className="materialize-textarea"
              />
            </label>
            <div>
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
              <button type="submit" className="btn blue">
                Save
              </button>
              <div>
                <form onSubmit={handleSubmitPasswordChange}>
                  <label htmlFor="oldpassword">
                    Old Password
                    <input
                      type="password"
                      name="oldPassword"
                      id="oldpassword"
                      required
                    />
                  </label>
                  <label htmlFor="newpassword">
                    New Password
                    <input
                      type="password"
                      name="newPassword"
                      id="newpassword"
                      required
                    />
                  </label>
                  <button type="submit" className="btn blue">
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
const SettingPage = () => {
  const [user] = useCurrentUser();
  if (!user) {
    return (
      <>
        <p>Please sign in</p>
      </>
    );
  }
  return (
    <>
      <ProfileSection />
    </>
  );
};
export default SettingPage;
