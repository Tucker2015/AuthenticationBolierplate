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
        name, email, bio, profilePicture,
    } = user || {};
    const [currentUser] = useCurrentUser();
    const isCurrentUser = currentUser?._id === user._id;
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>

            <div className="container">

                <div>
                    <img src={profilePicture} className="circle" width="200" height="200" style={{ padding: '2rem', borderRadius: '50%', borderBottom: '3px solid #0ee80e' }} />
                    <h2 style={{ fontSize: '2rem', color: '#fff' }}>{name}</h2>
                    <div className="">
                        <div style={{ fontSize: '1rem', color: '#fff' }}>
                            <p><strong>Bio :</strong> {bio}</p>
                            <p>
                                <strong>Email :</strong>  {email}
                            </p>
                        </div>
                    </div>



                </div>

                <div className="card-action">
                    {isCurrentUser && (
                        <Link href="/setting">
                            <a className="waves-effect waves-light btn-small blue">Edit</a>
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