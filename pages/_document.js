import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <div
            id="wcb"
            class="carbonbadge"
            style={{
              backgroundColor: "#f3ecd899",
              paddingTop: "5px",
              paddingBottom: "20px",
            }}
          ></div> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
