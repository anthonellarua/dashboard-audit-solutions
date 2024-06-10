import Image from "next/image";
import { Inter } from "next/font/google";
import DashboardNoWallet from "./dashboard-nowallet/dashboard-nowallet";
import DashboardNoContent from "./dashboard-nocontent/dashboard-nocontent";
import DashboardContent from "./dashboard-content/dashboard-content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <DashboardContent/>
    </main>
  );
}
