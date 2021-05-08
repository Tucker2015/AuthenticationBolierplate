import Link from 'next/link';
import { useUser } from '../lib/hooks';
import { useState } from 'react'
import { useCurrentUser } from '../lib/hooks';
import styles from "../styles/Auth.module.css";

export default function Test() {

    const [user, { mutate }] = useUser();
    const [loading, isLoading] = useState(false);
    const {
        name, email, bio, profilePicture, passKey
    } = user || {};
    const [currentUser] = useCurrentUser();

    return (
        <div className={styles.container}>
            {loading ? <div className="progress white" style={{ margin: 0 }}>
                <div className="indeterminate blue">Loading.......</div>
            </div> : null}
            {!user ? (<>
                <h1>You are not logged in</h1>
            </>) : (<h3>Welcome back {user.name}</h3>)}

            <div className="card-action">
                {!user ? (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href="/login">
                                <a className={styles.btn_login}>Log in</a>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="">
                        <img
                            src={profilePicture}
                            width="200"
                            height="200"
                            alt={name}
                            style={{ padding: '2rem', borderRadius: '50%', borderBottom: '3px solid #29f' }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}