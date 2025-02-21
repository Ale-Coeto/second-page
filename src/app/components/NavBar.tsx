"use client";

import Link from "next/link";
import React, { useContext, useState } from 'react';
import { UserContext } from "../utils/userContext";

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogOut = () => {
        setUser("");
    }

    return (
        <div className="fixed w-full py-4 px-10 flex flex-row justify-between bg-blue-500">

            <div className="flex flex-row gap-5">
                <Link href="/">
                    Home
                </Link>
                <Link href="/page2">
                    Page 2
                </Link>
            </div>

            {user === "" ? (
                <Link href="/sign_up">
                    Sign Up
                </Link>
            ) : (
                <div className="flex flex-row gap-4">

                    <div className="flex flex-row">
                        {user}
                    </div>
                    <div onClick={handleLogOut}>
                        Logout
                    </div>
                </div>
            )}

        </div>
    )
}

export default NavBar;