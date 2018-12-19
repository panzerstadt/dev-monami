// import pieces of your webpage here
import Layout from "../components/Layout";

// settings for flexbox css
// https://yoksel.github.io/flex-cheatsheet/

// pick colors from here (press spacebar to randomize)
// https://coolors.co/959677-c1c1c1-f0f0f0-bda989-021b2d

// Layout is the template i made for you
// have a look at the nextjs tutorial, its based on that

// remember, 'pages' is a magic folder.
// whatever js file you put in there becomes accessible by the name

// this dummypage doesn't do anything but make a pretty blank page
const dummyPage = () => {
  const dummyPageStyle = {
    page: {
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    text: {
      display: "inline-block",
      borderRight: "1px solid rgba(0, 0, 0,.3)",
      margin: 0,
      marginRight: 20,
      padding: "10px 23px 10px 0",
      fontSize: "24px",
      fontWeight: 500,
      verticalAlign: "top"
    },
    dummyContent: {
      display: "inline-block",
      textAlign: "left",
      lineHeight: 2.5,
      height: 49,
      verticalAlign: "middle",
      marginTop: -30
    }
  };
  return (
    <div style={dummyPageStyle.page}>
      <div>
        <h1 style={dummyPageStyle.text}>project goals</h1>
        <p style={dummyPageStyle.dummyContent}>
          website: <strong>"gib me data i gib you finished webpage"</strong>
          <br />
          you: "ok thanks."
          <br />
          website: ᕕ( ᐛ )ᕗ
          <br />
          you: _へ__(‾◡◝ )>
        </p>
      </div>
    </div>
  );
};

const Index = () => (
  <Layout>
    {/* if you want to place content here, put it in between the Layout tagss */}
    {dummyPage()}
  </Layout>
);

export default Index;
