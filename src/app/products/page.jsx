import {flow_circular, quicksand} from '../../fonts/fonts'
import Image from 'next/image';
import product_image from '../../../public/image.jpg'

export default async function Products(){
    let products = await fetch('http://localhost:3000/api/products').then(products => products);
    
    return (
    <div>
        <h1 className={flow_circular.className}>This is products</h1>
        <div className={quicksand} style={{"position": 'relative'}} >
            <span>Image title</span><br />
            <Image src={product_image} width={500} height={150} style={{"object-fit": 'cover'}} alt="Image title"/>
        </div>
    </div>
    );
}