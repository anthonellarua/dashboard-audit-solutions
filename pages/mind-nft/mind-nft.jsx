import styles from "./mind-nft.module.scss"
import Image from "next/image";

export default function MindNFT() {
    return (
        <>
            <div className={styles.mindnft}>
                <div className={styles.mindnft__container}>
                    <div className={styles.mindnft__protocol}>
                        <h2>Protocol NFT</h2>
                        <p>ProofOfProtocol NFTs are necessary for developers to engage with Hyacinth Auditors and begin offering bounties on their code to auditors. To publish an auditor bounty for your project through Hyacinth & have them approved, developers MUST have a ProofOfDeveloper NFT in their wallet.</p>
                        <div className={styles.mindnft__imagecontainer}>
                            <Image width={296} height={296} src="/image.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.mindnft__price}>
                        <div className={styles.mindnft__price__price}>
                            <span>Price:</span>
                            <div><span>$100</span><span>USDC.e</span></div>
                        </div>
                        <div className={styles.mindnft__price__features}>
                            <p>Features:</p>
                            <ul>
                                <li><Image width={14} height={14} src="/icons/check-icon.png" alt=""/> <span>Create Bounties</span></li>
                                <li><Image width={14} height={14} src="/icons/check-icon.png" alt=""/> <span>Add Approved Auditors</span></li>
                                <li><Image width={14} height={14} src="/icons/check-icon.png" alt=""/> <span>Give Auditor Feedback</span></li>
                                <li><Image width={14} height={14} src="/icons/check-icon.png" alt=""/> <span>Your Own Developer Escrow Contract to Post Bounties</span></li>
                            </ul>
                        </div>
                        <span className={styles.mindnft__price__button}>Apply & Mint</span>
                    </div>
                </div>
                <img src="adorno-2.png" alt="" className={styles.mindnft__firstcircle} />
                <img src="adorno-2.png" alt="" className={styles.mindnft__secondcircle} />
            </div>
        </>
    );
}