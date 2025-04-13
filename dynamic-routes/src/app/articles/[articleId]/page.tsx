export default async function Page({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  return <h1>Page Id is : {articleId}</h1>;
}
