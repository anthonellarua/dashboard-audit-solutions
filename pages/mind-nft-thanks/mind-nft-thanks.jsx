import styles from "./mind-nft-thanks.module.scss"
import Image from "next/image";

export default function MindNFTThanks() {
    return (
        <>
            <div className={styles.mindnft}>
                <div className={styles.mindnft__container}>
                    <div className={styles.mindnft__protocol}>
                        <h2>Protocol NFT</h2>
                        <p>ProofOfProtocol NFTs are necessary for developers to engage with Hyacinth Auditors and begin offering bounties on their code to auditors. To publish an auditor bounty for your project through Hyacinth & have them approved, developers MUST have a ProofOfDeveloper NFT in their wallet.</p>
                        <div className={styles.mindnft__imagecontainer}>
                            <Image width={296} height={296} src="/image-rounded-full.png" alt="" />
                            <Image width={67} height={67} src="/adorno-2.png" alt="" className={styles.mindnft__imagecontainer__secondcircle} />
                        </div>
                    </div>
                    <div className={styles.mindnft__price}>
                        <p>Thanks you for your Protocol NFT</p>
                    </div>
                </div>
                <Image width={106} height={106} src="/adorno-2.png" alt="" className={styles.mindnft__firstcircle} />
            </div>
        </>
    );
}