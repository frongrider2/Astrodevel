import React from "react";
import Head from "next/head";

const HeadEdit = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>AstroDev</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>

      <link
        rel="shortcut icon"
        href="https://img.icons8.com/ios/50/000000/astronaut-helmet.png"
      />

      {/* font */}
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      ></link>

      {/* font awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      ></link>

      {/* iconify */}
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    </Head>
  );
};

export default HeadEdit;
