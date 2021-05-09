import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useCurrentUser } from "../lib/hooks";
import styles from "../styles/Setting.module.css";
import { useSnackbar } from "nextjs-toast";

const ProfileSection = () => {
  const [user, { mutate }] = useCurrentUser();
  const [loading, isLoading] = useState(false);
  const nameRef = useRef();
  const bioRef = useRef();
  const profilePictureRef = useRef();
  const [msg, setMsg] = useState({ message: "", isError: false });
  const snackbar = useSnackbar();

  const handleUpdated = () => {
    snackbar.showMessage("Profile update !!", "success", "filled");
  };

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
      handleUpdated();
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
      <div className={styles.header}>
        <h1>Edit Profile</h1>
      </div>

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
          </div>
          <div className={styles.textField} style={{ border: "none" }}>
            <label htmlFor="avatar">Profile Picture</label>
            <div className="btn-small file-field input-field blue">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                ref={profilePictureRef}
              />
            </div>
            <button type="submit" className="edit_button">
              Save
            </button>
          </div>
        </form>
        <form onSubmit={handleSubmitPasswordChange}>
          <div className={styles.textField}>
            <label htmlFor="oldpassword">
              Old Password
              <input
                type="password"
                name="oldPassword"
                id="oldpassword"
                required
              />
            </label>
          </div>
          <div className={styles.textField}>
            <label htmlFor="newpassword">
              New Password
              <input
                type="password"
                name="newPassword"
                id="newpassword"
                required
              />
            </label>
          </div>
          <button type="submit" className="btn blue">
            Change Password
          </button>
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
