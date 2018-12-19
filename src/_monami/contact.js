import Layout from "../components/Layout";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout>
      <h2> this is the home page</h2>
      <Link href="/">
        <a>go back to the template page</a>
      </Link>
    </Layout>
  );
};

export default Contact;
