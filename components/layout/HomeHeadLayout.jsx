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
          content="I am Abhishek Pednekar, a freelance web developer from Bengaluru, India. With over 12 years of IT experience working for large enterprises, I can help you take your business online or improve your existing online presence. Contact me or schedule a free consultation and I will help you chart your path to success by addressing your current pain points and avoiding some common pitfalls."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhishek Pednekar" />
        <meta
          property="og:description"
          content="I am Abhishek Pednekar, a freelance web developer from Bengaluru, India. With over 12 years of IT experience working for large enterprises, I can help you take your business online or improve your existing online presence. Contact me or schedule a free consultation and I will help you chart your path to success by addressing your current pain points and avoiding some common pitfalls."
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
                "jobTitle": "Freelance Web Developer, Bengaluru",
                "image": ${JSON.stringify(heroImage)},
                "url": "https://abhishekpednekar.com",
                "address": {
                  "@context": "https://schema.org",
                  "@type": "PostalAddress",
                  "addressRegion": "Bengaluru, KA",
                  "addressCountry": "IN"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "dateCreated": "06-12-2021",
                "url": "https://abhishekpednekar.com",
                "description": "Need to hire a freelance web developer to create a modern, easy to use, aesthetically pleasing and performant website? Maybe you want to take your existing business to greater heights! Connect with me via the contact form on my website or schedule a free consultation. I want to work with you!",
                "genre": "Website for a freelance web developer from Bengaluru",
                "keywords": "web development, web design, freelance, seo, digital marketing, google ads, facebook ads, bangalore, bengaluru"
              }
            ]`,
          }}
        />
        <script
          type="text/javascript"
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
      {props.children}
    </Fragment>
  );
};

export default HomeHeadLayout;
