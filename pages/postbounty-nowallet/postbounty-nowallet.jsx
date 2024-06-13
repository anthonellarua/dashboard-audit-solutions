import styles from "./postbounty-nowallet.module.scss"
import Image from "next/image";

export default function PostBountyNoWallet() {
    return (
        <>
            <div className={styles.postbountynowallet}>
                <div className={styles.postbountynowallet__container}>
                    <div className={styles.postbountynowallet__titlesection}>
                        <div>
                            <h2>Post a Bounty Request</h2>
                            <p>Fill the form below to post a bounty request for your project.</p>
                        </div>
                        <button>Mint a Protocol NFT<Image width={11} height={10} src="/icons/arrow-right.png" /></button>
                    </div>
                    <div className={styles.postbountynowallet__imagesection}>
                        <Image width={560} height={560} src="/image.png" className={styles.postbountynowallet__image}/>
                        <Image width={80} height={80} src="/degrade-type2.png" className={styles.postbountynowallet__gradientimage}/>
                    </div>
                </div>
                <Image width={330} height={330} src="/gradient-circle.png" className={styles.postbountynowallet__gradientgeneral}/>
            </div>
        </>
    );
}