import Link from "next/link";
import { useUser } from "../lib/hooks";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useSnackbar } from "nextjs-toast";
import Signup from "@/components/Signup";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <h1>Live PPV Events</h1>
      </div>
      <div className={styles.main}>
        <h3>
          Coming soon we have a Live PPV event from Spartan BKB Fight Club
        </h3>
        <img src="/spartan_logo1.png" alt="Spartan Logo" />
        <p>Sign up now to receive your unique Pass Key for the Live Event.</p>
        <a style={{ backgroundColor: "#0aa44f" }} href="/signup">
          Sign Up
        </a>
      </div>
    </div>
  );
}
