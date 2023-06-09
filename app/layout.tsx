import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import Login from "@/components/Login";
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ClientProvider from "@/components/ClientProvider"
const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default async function RootLayout({
  children,
}: {      
  children: React.ReactNode;
}) {
  
  const session = await getServerSession(authOptions)
  
  return (
    <html lang="en">
      <body  className={inter.className}>
    <SessionProvider session={session}>
    {!session?(
      <Login/>
    ):(
      
        <div className="flex ">
        
        <div className="bg-[#202123] max-w-xs h-screen overscroll-y-scroll md:min-w-[20rem]">
          <Sidebar/>
        </div>

          {/* clientprovider-notification */}
          <ClientProvider/>
          
          <div className="bg-[#343541] flex-1">{children}</div>

        </div>
    )}
    </SessionProvider>
      </body>
    </html>
  );
}
