import Image from "next/image";
import { Inter } from "next/font/google";
import DashboardNoWallet from "./dashboard-nowallet/dashboard-nowallet";
import DashboardNoContent from "./dashboard-nocontent/dashboard-nocontent";
import DashboardContent from "./dashboard-content/dashboard-content";
import MindNFT from "./mind-nft/mind-nft";
import MindNFTThanks from "./mind-nft-thanks/mind-nft-thanks";
import ProfileAuditor1 from "./profile-auditor-1/profile-auditor-1";
import ProfileAuditor2 from "./profile-auditor-2/profile-auditor-2";
import PostBountyNoWallet from "./postbounty-nowallet/postbounty-nowallet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PostBountyNoWallet/>
    </main>
  );
}
