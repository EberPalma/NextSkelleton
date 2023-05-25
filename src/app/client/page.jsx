'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientProtectPage(){
    const { data:session } = useSession({
        required: true,
        onUnauthenticated(){
            redirect('/signin?callbackURL=/protected/client')
        }
    });

    return (
        <section>
            <div className="container">
                <h1>This is a <span>client-side</span> protected page</h1>
                <h2>You are logged as:</h2>
                <p>{session?.user?.name}</p>
            </div>
        </section>
    )
}