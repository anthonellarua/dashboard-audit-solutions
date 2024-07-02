import Image from "next/image";
import DashboardNoWallet from "./dashboard-nowallet/dashboard-nowallet";
import DashboardNoContent from "./dashboard-nocontent/dashboard-nocontent";
import DashboardContent from "./dashboard-content/dashboard-content";
import MindNFT from "./mind-nft/mind-nft";
import MindNFTThanks from "./mind-nft-thanks/mind-nft-thanks";
import ProfileAuditor1 from "./profile-auditor-1/profile-auditor-1";
import ProfileAuditor2 from "./profile-auditor-2/profile-auditor-2";
import PostBountyNoWallet from "./postbounty-nowallet/postbounty-nowallet";
import PostBounty from "./post-bounty/post-bounty";
import ProfileAuditor3 from "./profile-auditor-3/profile-auditor-3";
import Retainers from "./retainers/retainers";
import BountyFull from "./bounty-full/bounty-full";
import ADashboardContent from "./a-dashboard-content/a-dashboard-content";
import ADashboardNoContent from "./a-dashboard-nocontent/a-dashboard-nocontent";
import ADashboardNoWallet from "./a-dashboard-nowallet/a-dashboard-nowallet";
import AApply from "./a-apply/a-apply";
import MyProfileProtocols from "./myprofile-protocols/myprofile-protocols";
import MyProfileAuditor from "./myprofile-auditor/myprofile-auditor";
import ABounties from "./a-bounties/a-bounties";
import ChatProtocols from "./chat-protocols/chat-protocols";
import ADashboardAcceptedAudits from "./a-dashboard-acceptedaudits/a-dashboard-acceptedaudits";
import ADashboardCompleteAudits from "./a-dashboard-completedaudits/a-dashboard-completedaudits";
import ADashboardRequestedAudits from "./a-dashboard-requestedaudits/a-dashboard-requestedaudits";
import ABountyFull from "./a-bounty-full/a-bounty-full";
import MyProfileProtocolsEdit from "./my-profile-protocols/my-profile-protocols";
import ALeaderboards from "./a-leaderboards/a-leaderboards";

export default function Home() {
  return (
    <main>
      <ALeaderboards/>
    </main>
  );
}
