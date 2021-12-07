import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
             })(window, document, "clarity", "script", "9n0p3k99s5");
            `,
            }}
          />
        </Head>
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
