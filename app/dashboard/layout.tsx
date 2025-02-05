import { FollowSuggestions, Menu, MiniPanel, Navbar, ProfileCard, TopCommunities } from "@/components";

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
        <div className="w-full bg-peteaseBlack px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-6">
          <div className="flex gap-6 text-peteaseBlue">
            <div className='hidden xl:block w-[25%]'>
              <div className='flex flex-col gap-6'>
                  <ProfileCard />
                  <Menu />
              </div>
            </div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
              { children }
            </div>
            <div className='hidden lg:block w-[25%]'>
              <div className='flex flex-col gap-6'>
                  <FollowSuggestions />
                  <TopCommunities />
                  <MiniPanel />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
