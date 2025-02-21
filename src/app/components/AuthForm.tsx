"use client";

import { useContext, useState } from "react";
import { UserContext } from "../utils/userContext";
import { IoIosWarning } from "react-icons/io";
import { emailSchema, passwordSchema } from "../utils/schemas";
import toast, { Toaster } from "react-hot-toast";
import { DefaultUser, User } from "../utils/user";

const AuthForm = () => {
    const { user, setUser } = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState<User>(DefaultUser);
    const [error, setError] = useState<string>("");

    const validUser = () => {
        if (currentUser.name === "") {
            setError("No name provided")
            return false
        }
        return true
    }

    const handleInputChange = (field: keyof User, value: string) => {
        setCurrentUser((prevUser) => ({
            ...prevUser,
            [field]: value,
        }));
    };

    const validPassword = () => {
        const result = passwordSchema.safeParse(currentUser.password);

        if (result.success) {
            return true
        } else {
            const errorMessage = result.error.errors
                .map((error) => error.message) // Extract error messages
                .join(". ");

            setError(errorMessage)
        }
    }

    const validEmail = () => {
        if (currentUser.email === "") {
            setError("No email provided")
            return false
        }
        const result = emailSchema.safeParse(currentUser.email);

        if (result.success) {
            return true;
        } else {
            const errorMessage = result.error.errors
                .map((error) => error.message) // Extract error messages
                .join(". ");

            setError(errorMessage)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        if (validUser() && validEmail() && validPassword()) {
            setUser(currentUser.name)
            setCurrentUser(DefaultUser)
            setError("");
            toast.success("Sign up correct")
        }

        e.preventDefault();

    }

    const handleSignOut = () => {
        setUser("");
    }

    return (
        <>
            {user === "" ? (
                <form onSubmit={handleSubmit} className="flex flex-col bg-white w-1/3 p-10 rounded-md gap-2 text-slate-900">
                    <div className="self-center text-lg font-bold text-slate-700">
                        Sign up
                    </div>
                    <div>
                        <div>Name</div>
                        <input value={currentUser.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full text-gray-900 bg-slate-100 p-1 rounded-md outline-sky-500" />
                    </div>
                    <div>
                        <div>Email</div>
                        <input value={currentUser.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full text-gray-900 p-1 bg-slate-100 rounded-md outline-sky-500" type="email" />
                    </div>
                    <div>
                        <div>Password</div>
                        <input value={currentUser.password} onChange={(e) => handleInputChange("password", e.target.value)} className="w-full text-gray-900 p-1 bg-slate-100 rounded-md outline-sky-500" type="password" />
                    </div>

                    {error != "" && (
                        <div className="flex flex-row items-center gap-2 px-2 mt-4 text-sm bg-rose-300 p-1 rounded-md text-rose-900  border-rose-900">
                            <IoIosWarning />
                            <div>Error: {error}</div>
                        </div>
                    )}

                    <button className="bg-sky-400 p-1 rounded-md text-white mt-8" type="submit">
                        Submit
                    </button>
                </form>

            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-lg font-semibold text-slate-900">
                        Welcome
                    </div>
                    <div className="text-slate-600">
                        {user}!
                    </div>
                    <button className="bg-sky-500 text-white py-1 px-3 mt-8 rounded-full" onClick={handleSignOut}>
                        Sign out
                    </button>
                </div>
            )}

        </>
    )
}

export default AuthForm;