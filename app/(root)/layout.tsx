import  Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggendIn = { firstname: 'Soham', lastName : 'Patwari'};
  return (
    
    <main className="flex h-screen w-full font-inter">
        <Sidebar 
          user = {loggendIn}
        />
            

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggendIn} />
          </div>
        </div>
        {children}
      </div>
        
    </main>
  );
}
