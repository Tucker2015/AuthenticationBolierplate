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
    const [visible, setVisible] = useState(true);
    //user to enter passKey from db to see if they are a live streamer
    const [passKeyInput, setPassKeyInput] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        isLoading(true);
        if (passKeyInput === passKey) {
            mutate(user);
            isLoading(false);
            setVisible(false);
            return;
        } else if (!passKeyInput !== passKey) {
            isLoading(false);
            return alert('Please enter a valid passkey');
        }
        isLoading(false);
    }

    return (
        <div className={styles.container}>
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
                        {visible ? (
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input type="text" placeholder="Enter passkey" value={passKeyInput} onChange={(e) => setPassKeyInput(e.target.value)} />
                                <button className={styles.btn_login} onClick={handleSubmit}>Submit</button>
                            </div>
                        ) :
                            (
                                null
                            )}
                        {passKeyInput === passKey ? <LiveVideo /> : null}
                    </>
                )}
            </>
        </div>
    )
}