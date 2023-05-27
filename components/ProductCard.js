import Image from "next/image"
import Link from "next/link"
import styles from "../styles/ProductCard.module.css"
import SkelProductCard from "./SkelProductCard"
import { useState } from "react"
import { setPageYOffset } from "../utils/rememberScrollPosition"

export default function ProductCard({ product }) {
  const { attributes: productInfo } = product
  const { formats: image } = product.attributes.Image.data[0].attributes

  const [finishedLoading, setFinished] = useState(false)

  return (
    <Link href={`/product/${product.attributes.slug}`}>
      <a className={styles.container} onClick={() => setPageYOffset()}>
        <div className={styles.image}>
          <Image
            src={
              process.env.NODE_ENV === "development"
                ? "/androidphone-mobile.jpg"
                : image.medium.url
            }
            alt={productInfo.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            onLoadingComplete={() => setFinished(true)}
            unoptimized
          />
        </div>
        {finishedLoading ? (
          <div className={styles.info}>
            <p>{productInfo.Name}</p>
            <p>£{productInfo.Price}</p>
          </div>
        ) : null}
        {finishedLoading ? null : <SkelProductCard />}
      </a>
    </Link>
  )
}