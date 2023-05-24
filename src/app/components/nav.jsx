import Link from "next/link";

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
        <ul>
            {pages.map((item)=>
                ( <li><Link href={item.route}>{item.page}</Link></li> )
            )}
        </ul>
    );
}