import Link from "next/link";
import { useUser } from "../lib/hooks";
import { useState } from "react";

export default function Home() {
  const [user, { mutate }] = useUser();
  const [loading, isLoading] = useState(false);

  return (
    <>
      <div>Welcome Home</div>
    </>
  );
}
