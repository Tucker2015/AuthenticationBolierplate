import Link from "next/link";
import { useUser } from "../lib/hooks";
import AfterLogin from "../components/AfterLogin";
import { useState } from "react";

export default function Home() {
  const [user, { mutate }] = useUser();
  const [loading, isLoading] = useState(false);
  const handleLogout = async () => {
    isLoading(true);
    await fetch("/api/auth", {
      method: "DELETE",
    });
    // set the user state to null
    mutate(null);
    M.toast({ html: "Logged out", classes: "toast" });
    isLoading(false);
  };
  return (
    <>
      <div className="card horizontal z-depth-5">
        <div
          className="card-image hide-on-small-only"
          style={{ display: "flex" }}
        >
          {!user ? (
            <>
              <img
                src="https://cdn.dribbble.com/users/2251626/screenshots/6831464/welcome_dribbble.png"
                className="responsive-img"
                alt=""
              />
            </>
          ) : (
            <img
              src="https://cdn.dribbble.com/users/1090020/screenshots/10535970/media/766c2d3d6101fca5d441420a6412abf1.png"
              className="responsive-img"
              alt=""
            />
          )}
        </div>
        <div className="card-stacked center-align">
          {loading ? (
            <div className="progress white" style={{ margin: 0 }}>
              <div className="indeterminate blue"></div>
            </div>
          ) : null}
          <div className="card-content">
            <h2 style={{ marginTop: "0" }}>
              <span
                style={{
                  fontWeight: "bolder",
                  color: `${user ? "#2196f3" : "#7ed"}`,
                  textShadow: "2px 2px black",
                }}
              >
                Hello{" "}
              </span>
              {!user ? "Stranger" : user.name}
            </h2>

            <div className="col s12 m12">
              {!user ? (
                <>
                  <div className="card-panel #80cbc4 teal lighten-2">
                    <span>
                      Please Contact us to receive your login details for the
                      Live Event
                    </span>
                  </div>
                </>
              ) : (
                <AfterLogin />
              )}
            </div>
          </div>

          <div className="card-action">
            {!user ? (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link href="/login">
                    <a className="waves-effect waves-light btn">Log in</a>
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link href="/user/[userId]" as={`/user/${user._id}`}>
                    <a className="waves-effect waves-light btn blue">Profile</a>
                  </Link>
                  <Link href="/test">
                    <a className="waves-effect waves-light btn blue">
                      Test Page
                    </a>
                  </Link>
                  <a
                    role="button"
                    onClick={handleLogout}
                    className="waves-effect waves-light btn blue"
                  >
                    Logout
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
