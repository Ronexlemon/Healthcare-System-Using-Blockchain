import SideBar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen    bg-[#002062] overflow-hidden">
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1 h-screen overflow-y-auto">
          <SideBar />
        </div>
        <div className="col-span-3 p-0 bg-[#002062] h-screen w-full   overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
