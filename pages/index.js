import Image from "next/image";
import { Inter } from "next/font/google";
import DashboardNoWallet from "./dashboard-nowallet/dashboard-nowallet";
import DashboardNoContent from "./dashboard-nocontent/dashboard-nocontent";
import DashboardContent from "./dashboard-content/dashboard-content";
import MindNFT from "./mind-nft/mind-nft";
import MindNFTThanks from "./mind-nft-thanks/mind-nft-thanks";
import ProfileAuditor1 from "./profile-auditor/profile-auditor-1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ProfileAuditor1/>
    </main>
  );
}
