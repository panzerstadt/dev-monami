import Layout from "../components/Layout";
import { load_image } from "../utils/Utils";

// the most basic of basic with layout applied
const Women = () => {
  //const images = ImportAll2("../assets/products", "jpg");

  //console.log(images);
  return (
    <Layout>
      <p>here is some data</p>
      {load_image(require("../04.jpg"))}
    </Layout>
  );
};
export default Women;
