import { wait } from "@/libs/util";

export default async function Dashboard() {
  await wait(3000);
  return (
    <div> Dashboard </div>
  );
}
