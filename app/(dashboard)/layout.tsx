import { Navbar } from "@/components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <div className="w-full px-4 py-4 md:px-8 xl:px-32 2xl:px-42 bg-peteaseGrey">
          <Navbar />
        </div>
        <div className="w-full bg-peteaseBlack px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          { children }
        </div>
      </body>
    </html>
  );
}
