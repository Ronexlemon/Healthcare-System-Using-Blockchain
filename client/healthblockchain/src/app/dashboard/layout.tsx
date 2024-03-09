

import SideBar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
   <main className="bg-[#002062]" >
    <div className="grid grid-cols-4 w-full ">
        <div className="col-span-1/2">
            <SideBar/>
        </div>
        <div className=" col-span-3 bg-[#002062]">{children}</div>

    </div>
   
   </main>
  );
}
