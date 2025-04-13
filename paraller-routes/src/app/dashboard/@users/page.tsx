import { wait } from "@/libs/util"

export default async function Users() {
  await wait(2000);
  return <h1>Users</h1>
}
