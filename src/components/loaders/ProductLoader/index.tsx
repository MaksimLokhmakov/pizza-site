import ContentLoader from "react-content-loader";

const ProductLoader = () => (
  <ContentLoader
    speed={4}
    width={320}
    height={470}
    viewBox="5 25 300 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="15" y="421" rx="2" ry="2" width="300" height="36" />
    <rect x="15" y="277" rx="0" ry="0" width="190" height="35" />
    <rect x="15" y="317" rx="0" ry="0" width="300" height="70" />
    <rect x="15" y="-34" rx="0" ry="0" width="300" height="300" />
  </ContentLoader>
);

export default ProductLoader;
