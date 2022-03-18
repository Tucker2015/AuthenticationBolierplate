import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';
import middleware from '../../../middlewares/middleware';
import { useCurrentUser } from '../../../lib/hooks';
import { getUser } from '../../../lib/db';

export default function UserPage({ user }) {

    if (!user) return <Error statusCode={404} />;
    const {
        name, email, passKey, bio, profilePicture
    } = user || {};
    const [currentUser] = useCurrentUser();
    const isCurrentUser = currentUser?._id === user._id;
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>

            <div className="container">

                <div className="profile_Bx">
                    <img src={profilePicture} className="circle" width="200" height="200" />
                    <h2 style={{ fontSize: '2rem', color: '#fff', textShadow: '1px 1px 5px #000' }}>{name}</h2>
                    <div className="">
                        <div style={{ fontSize: '1.2rem', color: '#fff', textShadow: '1px 1px 5px #000' }}>
                            <p><strong>Bio :</strong> {bio}</p>
                            <p>
                                <strong>Email :</strong>  {email}
                            </p>
                            <p>
                                <strong>Passkey :</strong>  {passKey}
                            </p>
                        </div>
                    </div>



                </div>

                <div className="user_logged" style={{ margin: 20 }}>
                    {isCurrentUser && (
                        <Link href="/setting">
                            <a className="edit_button">Edit Profile</a>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
export async function getServerSideProps(context) {
    await middleware.run(context.req, context.res);
    const user = await getUser(context.req, context.params.userId);
    if (!user) context.res.statusCode = 404;
    return {
        props: {
            user,
        }, // will be passed to the page component as props
    };
}