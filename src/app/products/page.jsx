export default async function Products(){
    let products = await fetch('http://localhost:3000/api/products').then(products => products);
    products = await products.map((item)=>(
        <div key={item.id}>{item.name}</div>
    ));
    return (
    <div>
        <h1>This is products</h1>
        <div>
            {products}
        </div>
    </div>
    );
}