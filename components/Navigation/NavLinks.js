import React from 'react';
import Link from 'next/link'
import { useUser } from "../../lib/hooks";
import { useState } from "react";
import { useSnackbar } from "nextjs-toast";

const NavLinks = (props) => {

    const [user, { mutate }] = useUser();
    const [loading, isLoading] = useState(false);
    const snackbar = useSnackbar();

    const handleLogoutToast = () => {
        snackbar.showMessage("Logged Out", "info", "filled");
    };

    const handleLogout = async () => {
        isLoading(true);
        await fetch("/api/auth", {
            method: "DELETE",
        });
        // set the user state to null
        handleLogoutToast();
        mutate(null);
        isLoading(false);
    };

    return (
        <>
            {!user ? (
                <ul>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link href="/test">
                            <a>Test Page</a>
                        </Link>
                    </li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link href="/live">
                            <a>Live PPV</a>
                        </Link>
                    </li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link href="/user/[userId]" as={`/user/${user._id}`}>
                            <a>Profile</a>
                        </Link>
                    </li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link href="/">
                            <a role="button"
                                onClick={handleLogout}
                                className="waves-effect waves-light btn blue"
                            >Logout</a>
                        </Link>
                    </li>
                </ul>
            )}

        </>

    )
}
export default NavLinks;