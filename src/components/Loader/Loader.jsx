import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  // className="ImageGalleryItem"
    speed={0.75}
    width={360}
    height={262}
    viewBox="0 0 360 262"
    backgroundColor="#d7d5d5"
    foregroundColor="#c5c4c4"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="360" height="262" />
  </ContentLoader>
)

export default MyLoader
