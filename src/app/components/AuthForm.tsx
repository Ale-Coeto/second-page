"use client";

import { useContext, useState } from "react";
import { UserContext } from "../utils/userContext";

const AuthForm = () => {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validUser = () => {
        return name !== ""
    }

    const handleSubmit = (e: React.FormEvent) => {

        if (!validUser()) {
            setError("Name not valid")
        } else {
            setUser(name)
            setName("");
            setEmail("");
            setPassword("");
        }
        e.preventDefault();

    }

    return (

        <form onSubmit={handleSubmit} className="flex flex-col bg-white w-1/3 p-10 rounded-md gap-2 text-slate-900">
            <div className="self-center text-lg font-bold text-slate-700">
                Sign up
            </div>
            <div>
                <div>Name</div>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full text-gray-900 bg-slate-100 p-1 rounded-md outline-sky-500" />
            </div>
            <div>
                <div>Email</div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-gray-900 p-1 bg-slate-100 rounded-md outline-sky-500" type="email" />
            </div>
            <div>
                <div>Password</div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full text-gray-900 p-1 bg-slate-100 rounded-md outline-sky-500" type="password" />
            </div>

            {error !== "" && (
                <div className="bg-rose-300 p-1 rounded-md text-rose-900  border-rose-900">
                    Error: {error}
                </div>
            )}

            <button className="bg-sky-400 p-1 rounded-md text-white mt-8" type="submit">
                Submit
            </button>
        </form>
    )
}

export default AuthForm;