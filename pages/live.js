import Link from 'next/link';
import { useUser } from '../lib/hooks';
import { useState } from 'react'
import { useCurrentUser } from '../lib/hooks';
import styles from "../styles/Auth.module.css";
import LiveVideo from '@/components/Video/liveVideo';

export default function Test() {

    const [user, { mutate }] = useUser();
    const [loading, isLoading] = useState(false);
    const {
        name, email, bio, profilePicture, passKey, keyInUse
    } = user || {};
    const [currentUser] = useCurrentUser();
    const [visible, setVisible] = useState(false);
    const [passKeyCode, setPassKeyCode] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     isLoading(true);
    //     if (passKeyInput === passKey) {
    //         mutate(user);
    //         isLoading(false);
    //         setVisible(true);
    //         return;
    //     } else if (!passKeyInput !== passKey) {
    //         isLoading(false);
    //         return alert('Please enter a valid passkey');
    //     }
    //     isLoading(false);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        isLoading(true);
        if (passKeyCode === passKey) {
            mutate(user);
            isLoading(false);
            setVisible(true);
            return;
        } else if (!passKeyCode !== passKey) {
            isLoading(false);
            return alert('Please enter a valid passkey');
        }
        isLoading(false);
    }

    return (
        <div
            className={styles.container}>
            {loading ? <div className="progress white" style={{ margin: 0 }}>
                <div className="indeterminate blue">Loading.......</div>
            </div> : null}
            {!user ? (<>
                <h1>You are not logged in</h1>
            </>) : (<h3>Welcome back {user.name}</h3>)}

            <>
                {!user ? (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href="/login">
                                <a className={styles.btn_login}>Log in</a>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        {!visible ? (
                            <div className='container'>
                                <div>
                                    <form
                                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10 }}
                                        onSubmit={handleSubmit}>
                                        <input
                                            style={{ width: '100%', margin: 10, height: 40, fontSize: 20, padding: 10 }}
                                            type="text"
                                            placeholder='Enter Pass Key'
                                            value={passKeyCode}
                                            onChange={(e) => setPassKeyCode(e.target.value)}
                                        />
                                        <input className={styles.btn_key} type="submit" />
                                    </form>
                                </div>
                                <div
                                    className='info'
                                >
                                    {/* <h3>
                                        How do I get my passkey?
                                    </h3> */}
                                </div>
                            </div>
                        ) :
                            (
                                <LiveVideo />
                            )}
                    </>
                )}
            </>
        </div>
    )
}