import { wait } from "@/libs/util"

export default async function Articles() {
  await wait(5000);
  return <h1>Articles</h1>
}
