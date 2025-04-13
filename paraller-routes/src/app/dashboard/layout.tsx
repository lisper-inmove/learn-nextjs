export default function DashboardLayout({
  children,
  users,
  articles,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  articles: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{articles}</div>
        </div>
      </div>
    </div>
  );
}
