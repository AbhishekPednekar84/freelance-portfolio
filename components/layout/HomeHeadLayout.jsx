import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";
import { heroImage } from "../../utils/images";

const HomeHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Abhishek Pednekar</title>
        <meta
          name="description"
          content="I am Abhishek Pednekar, a freelance web developer from Bangalore, India. With over 12 years of IT experience working for large enterprises, I can help you take your business online or improve your existing online presence. Contact me or schedule a free consultation and I will help you chart your path to success by addressing your current pain points and avoiding some common pitfalls."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhishek Pednekar" />
        <meta
          property="og:description"
          content="I am Abhishek Pednekar, a freelance web developer from Bangalore, India. With over 12 years of IT experience working for large enterprises, I can help you take your business online or improve your existing online presence. Contact me or schedule a free consultation and I will help you chart your path to success by addressing your current pain points and avoiding some common pitfalls."
        />
        <meta property="og:url" content="https://abhishekpednekar.com/" />
        <meta property="og:site_name" content="abhishekpednekar.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `[
              {
 	              "@context": "https://schema.org",
                "@type": "Person",
                "givenName": "Abhishek Pednekar",
                "jobTitle": "Freelance Web Developer",
                "image": ${heroImage},
                "url": "https://abhishekpednekar.com",
                "address": {
                  "@context": "https://schema.org",
                  "@type": "PostalAddress",
                  "addressRegion": "Bengaluru, KA",
                  "addressCountry": "IN"
                }
              }
            ]`,
          }}
        />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default HomeHeadLayout;
