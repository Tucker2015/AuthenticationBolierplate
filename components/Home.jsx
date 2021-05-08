import Link from "next/link";
import { useUser } from "../lib/hooks";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useSnackbar } from "nextjs-toast";

export default function Home() {
  const [user, { mutate }] = useUser();
  const [loading, isLoading] = useState(false);

  return (
    <div>
      <div className={styles.main}>
        <h1>Live PPV Events</h1>
      </div>
    </div>
  );
}
