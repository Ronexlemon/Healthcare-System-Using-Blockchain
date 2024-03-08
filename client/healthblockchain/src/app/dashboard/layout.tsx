

import SideBar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
   <main className="bg-[#F2F8FD]" >
    <div className="grid grid-cols-4 w-full">
        <div className="col-span-1/2">
            <SideBar/>
        </div>
        <div className=" col-span-3">{children}</div>

    </div>
   
   </main>
  );
}
