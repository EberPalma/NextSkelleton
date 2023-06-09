import { flowCircular, quicksand } from '../../fonts/fonts'
import Image from 'next/image';
import product_image from '../../../public/image.jpg'

export default async function Products() {
    let products = await fetch('http://localhost:3000/api/inventory').then(products => products);
    products = await products.json();

    let productsItem = products.map((el) => <div>{el.name}</div>)

    return (
        <div>
            <h1 className={flowCircular.className}>This is products</h1>
            <div className={quicksand} style={{ "position": 'relative' }} >
                <span>Image title</span><br />
                <Image src={product_image} width={500} height={150} style={{ "object-fit": 'cover' }} alt="Image title" />
            </div>
            <div>
                {productsItem}
            </div>
        </div>
    );
}