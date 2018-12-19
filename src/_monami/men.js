import Link from "next/link";
import Layout from "../components/Layout";
import { load_image } from "../utils/Utils";

// for images, the css style i use a lot is this
// https://www.w3schools.com/css/css3_object-fit.asp

// this is a sample of my suggestions on how to make the image layout you hjave in mind

const imgBox = {
  overflow: "hidden"
};

// full page == multiple screen-height sets
const fullPage = () => {
  const fullPageStyle = {
    height: "100vh",
    overflow: "hidden",
    position: "relative" // random stuff you have to do to make this work
  };

  // this is a function that lets you easily setup images
  // 1. place images in static/images folder
  // 2. call them from here with their name
  // 3. set their dimensions and positions (refer to function to see which is which)
  // 4. if you don't set size, it defaults to a small 300x300 size
  const imagesFolder = "../assets/products/20181105/dress_1/";

  // your text in, positions x and y, font size, and whether or not its a link
  // url is optional
  const oneTextBlock = (text, posX, posY, fontSize, url) => {
    const textStyle = {
      position: "absolute",
      left: posX ? posX : 300,
      top: posY ? posY : 300,
      fontSize: fontSize ? fontSize : 20,
      backgroundColor: "#ffffffcc",
      padding: 5,
      color: "#021B2D"
    };

    let output = text;
    output = url ? (
      <Link href={url}>
        <a style={{ textDecoration: "none", color: textStyle.color }}>
          {output}
        </a>
      </Link>
    ) : (
      output
    );

    return <div style={textStyle}>{output}</div>;
  };

  const screen_1 = (
    <div style={fullPageStyle}>
      {/* callFunction('name', positionX, positionY, sizeX, sizeY) */}
      {load_image(require(imagesFolder + "01.jpg"), 100, 0, 600, 700)}
      {oneTextBlock("summer ice cream cone RM30", 600, 500, 20, "/purchase")}
    </div>
  );

  const screen_2 = (
    <div style={fullPageStyle}>
      {load_image(require(imagesFolder + "02.jpg"), 500, 300, 800, 400)}
      {oneTextBlock("this is a nice horse. i like nice horses.", 50, 600)}
      {load_image(require(imagesFolder + "03.jpg"), 50, 0, 300, 400)}
      {oneTextBlock("wow that's a swell man bag!", 300, 100)}
    </div>
  );

  const screen_3 = (
    <div style={fullPageStyle}>
      {load_image(require("../04.jpg"), 100, 100, 300, 500)}
      {oneTextBlock("some nice cladding here.", 500, 500)}
    </div>
  );

  const screens_to_show = [screen_1, screen_2, screen_3];

  return <div>{screens_to_show}</div>;
};

const Men = () => {
  return <Layout>{fullPage()}</Layout>;
};

export default Men;
