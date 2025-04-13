export default async function Page({
  params,
}: {
  params: Promise<{ goods: string[] }>;
}) {
  const { goods } = await params;
  console.log(goods.length);
  return <h1>Page Id is: {goods}</h1>;
}
