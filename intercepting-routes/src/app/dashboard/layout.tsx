import Link from "next/link";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Link href="/dashboard/a">To A</Link>
        <Link href="/dashboard/b">To B</Link>
        <Link href="/dashboard/c">To C</Link>
        <hr />
      </div>
      <div>{props.children}</div>
    </>
  );
}
