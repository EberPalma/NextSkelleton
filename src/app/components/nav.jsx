
//* Imports
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export default function Nav(){
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

    return (
        <ul className="navigation">
            {pages.map((item)=>
                ( <li><Link href={item.route}>  {item.page}</Link> <Icon className="icon" icon="far-regular fa-chevron-right"/></li> )
            )}
        </ul>
    );
}