
function getRandomInt(count:number){
  return Math.floor(Math.random() * count)
}

export default async function ProductDetails({
  params,
} : { 
    params: Promise< { productId: string}>;
}) {
  const random = getRandomInt(2);
  if(random ==1) {
    throw new Error("Error loadin product Details")
  }
  const productId = (await params).productId
  return <h1>This is the Product{productId} Details</h1>
}