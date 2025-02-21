"use client"; // Mark this as a Client Component

import { useState } from "react";
import { UserContext } from "../utils/userContext";

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string>("");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}