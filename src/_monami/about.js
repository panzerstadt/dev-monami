import Link from "next/link";

import Layout from "../components/Layout";

const gradientKeyframes = (
  <style jsx global>
    {`
      @keyframes Gradient {
        0% {
          background-position: 50% 0%;
        }
        50% {
          background-position: 50% 100%;
        }
        100% {
          background-position: 50% 0%;
        }
      }
    `}
  </style>
);

const p2Style = {
  rootTest: {
    display: "block",
    height: "100%",
    overflow: "hidden",
    textAlign: "left",
    fontWeight: 100
  },
  bodyTest: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "35em",
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(0deg, #FE654F, #D6EFFF)",
    backgroundSize: "400% 400%",
    animation: "Gradient 10s ease infinite"
  },
  svg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    text: {
      textAnchor: "middle"
    },
    maskRect: {
      fill: "rgba(255, 255, 255, 1)"
    },
    rect: {
      fill: "white",
      mask: 'url("#mask")'
    }
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: "100vh",
    overflow: "hidden",
    margin: "0 auto",
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#FCFEFF",
    zIndex: 0
  },

  title: {
    padding: 20,
    fontSize: 100,
    fontWeight: 100,
    titleText: {
      fontFamily: "'Roboto', sans-serif", //josefin, kameron, spectral, cormorant, fanwood
      //color: "#2F4959",
      padding: "10px 15px 5px 15px",
      border: "3px solid #2F4959"
    }
  },
  text: {
    fontSize: 30,
    fontWeight: 400,
    width: 375,
    maxWidth: 450,
    lineHeight: "1.6em",
    textShadow: "0 0 3px #DBDBDB",
    "@media (max-width: 500px)": {
      fontSize: 13,
      width: 320
    }
  }
};

const About = () => {
  const text = [
    "the background for this text moves.",
    "it moves!",
    "(strong)it moves yo!",
    "its very calming."
  ];

  const svgTextBox = sentence_list => {
    const fWeights = [100, 300, 400, 700, 900];
    const postitionFromTop = 600;
    const widthProportion = 1400 / 1920;
    const maxWidth = p2Style.text.maxWidth;
    const width = Math.min(
      (p2Style.text.width / 100) * widthProportion,
      (maxWidth / 100) * 0.2
    );
    //console.log("width of page 2, ", width, maxWidth);
    const fontSize = p2Style.text.fontSize * width;
    const fontWeight = p2Style.text.fontWeight;

    const lineHeight = () => {
      let size = parseFloat(p2Style.text.lineHeight.split("em")[0]);
      return fontSize * size;
    };

    const sentences = sentence_list.map((v, i) => {
      let moveDown = i * lineHeight() + postitionFromTop;
      let adjustedFontWeight = fontWeight;

      let weightCheck = v.split("(strong)");
      if (weightCheck.length > 1) {
        adjustedFontWeight = fWeights.find(e => e > fontWeight);
        v = weightCheck[1];
      }

      return (
        <text
          style={{
            ...p2Style.svg.text,
            fontSize: fontSize,
            fontWeight: adjustedFontWeight
          }}
          x="960"
          y={moveDown}
        >
          {v}
        </text>
      );
    });

    return sentences;
  };

  const svgPage = (
    <div style={p2Style.rootTest}>
      <div style={p2Style.bodyTest}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          width="1920px"
          height="1080px"
          preserveAspectRatio="xMidYMid slice"
          style={p2Style.svg}
        >
          <defs>
            <mask id="mask" x="0" y="0" width="1920" height="1080">
              <rect
                style={p2Style.svg.maskRect}
                x="0"
                y="0"
                width="1920"
                height="1080"
              />
              <text
                style={{
                  ...p2Style.svg.text,
                  ...p2Style.title,
                  ...p2Style.title.titleText
                }}
                x="960"
                y="40%"
              >
                About Us
              </text>

              {svgTextBox(text)}
            </mask>
          </defs>
          <rect
            style={p2Style.svg.rect}
            mask="url(#mask)"
            x="0"
            y="0"
            width="1920"
            height="1080"
          />
        </svg>
      </div>
    </div>
  );
  return (
    <Layout>
      {gradientKeyframes}
      <Link href="/">{svgPage}</Link>
    </Layout>
  );
};

export default About;
