
'use client'

//* Imports
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useSession, signIn } from "next-auth/react";

export default function Nav(){
    const {data: session} = useSession();

    const pages = [
        {
            page: 'home',
            route: '/'
        },
        {
            page: 'products',
            route: '/products'
        }
    ];

    var button;

    if( session ) {
        button = (
            <Link key={session.user.email} className="profile-button" href={'/client'}>
                <Icon className="icon" icon="far-regular fa-house"/>
                { session.user.name }
            </Link>);
    }else {
        button = <button key="not-logged-yet" className="profile-button" onClick={()=>{signIn()}}>Sign in</button>
    }

    return (
        <div className="nav-container">
            <ul className="navigation">
                {pages.map((item)=>
                    ( <li><Link key={item.route} href={item.route}>  {item.page}</Link></li> )
                )}
            </ul>
            <div className="button-container">
                { button }
            </div>
        </div>
        
    );
}