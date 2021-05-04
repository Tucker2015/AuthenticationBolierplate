import Link from 'next/link';
import { useUser } from '../lib/hooks';
import { useState } from 'react'

export default function Test() {

    const [user, { mutate }] = useUser();
    const [loading, isLoading] = useState(false);

    const handleLogout = async () => {
        isLoading(true);
        await fetch('/api/auth', {
            method: 'DELETE',
        });
        // set the user state to null
        mutate(null);
        M.toast({ html: 'Logged out', classes: 'toast' })
        isLoading(false);
    };

    return (
        <div>
            {loading ? <div className="progress white" style={{ margin: 0 }}>
                <div className="indeterminate blue"></div>
            </div> : null}
            {!user ? (<>
                <h1> You are not logged in</h1>
            </>) : (<h3>Welcome back {user.name}</h3>)}

            <div className="card-action">
                {!user ? (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href="/login">
                                <a className="waves-effect waves-light btn">Log in</a>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="">

                    </div>
                )}
            </div>
        </div>
    )
}