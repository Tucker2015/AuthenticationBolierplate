import { useState } from "react";
import { useUser } from "../lib/hooks";
import Link from 'next/link';

export default function Custom404() {

    const [loading, isLoading] = useState(false);
    const [user, { mutate }] = useUser();
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
        <div>
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
                                404 Page Not Found
                            </span>
                        </h2>
                        <Link href="/">
                            <a className="waves-effect waves-light btn blue">
                                Go to Home
                    </a>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}