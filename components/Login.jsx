import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../lib/hooks";
import Link from "next/link";
import styles from "../styles/Auth.module.css";

export default function Login() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useUser();
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.replace("/test");
  }, [user]);

  async function onSubmit(e) {
    isLoading(true);
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      isLoading(false);
      setErrorMsg("Incorrect username or password. Try again!");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.center}>
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
            <div className={styles.textField}>
              <input id="email" type="text" className="validate" required />
              <span></span>
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.textField}>
              <input
                id="password"
                type="password"
                className="validate"
                required
              />
              <span></span>
              <label htmlFor="password">Password</label>
            </div>
            <div className="col s12" style={{ marginBottom: "2rem" }}>
              <p className="left">
                <label>
                  <input type="checkbox" />
                  <span> Remember me</span>
                </label>
              </p>
            </div>
            <button className={styles.btn} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
