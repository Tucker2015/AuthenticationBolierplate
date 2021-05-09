import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useUser } from "../lib/hooks";
import styles from "../styles/Auth.module.css";
import Link from "next/link";
import { useSnackbar } from "nextjs-toast";

export default function Login() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, isLoading] = useState(false);
  const snackbar = useSnackbar();

  const handleSignup = () => {
    snackbar.showMessage("Signed Up Successfully", "success", "filled");
  };
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.currentTarget.password.value !== e.currentTarget.cpassword.value) {
      setErrorMsg("Passwords does not match");
    } else {
      isLoading(true);
      const body = {
        email: e.currentTarget.email.value,
        name: e.currentTarget.name.value,
        password: e.currentTarget.password.value,
      };
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 201) {
        const userObj = await res.json();
        // writing our user object to the state
        mutate(userObj);
        handleSignup();
      } else {
        isLoading(false);
        setErrorMsg(await res.text());
      }
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.center}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
            <div className={styles.textField}>
              <input
                id="name"
                type="text"
                className="validate"
                name="name"
                required
              />
              <span></span>
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.textField}>
              <input
                id="email"
                type="text"
                className="validate "
                name="email"
                required
              />
              <span></span>
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.textField}>
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                required
              />
              <span></span>
              <label htmlFor="password">Password</label>
            </div>
            <div className={styles.textField}>
              <input
                id="cpassword"
                type="password"
                className="validate"
                name="cpassword"
                required
              />
              <label htmlFor="cpassword">Confirm Password</label>
              <span></span>
            </div>
            <div className="col s12" style={{ marginBottom: "1rem" }}>
              <button className={styles.btn} type="submit">
                Sign Up
              </button>
            </div>
            <div className="col s12" style={{ marginBottom: "2rem" }}>
              <p>
                Already have an account
                <Link href="/login"> Login here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
