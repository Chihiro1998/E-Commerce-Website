"use client";
import { SignUp } from "@clerk/nextjs";
import { Pacifico, Roboto } from "next/font/google";

// 引入字体
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function SignUpPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        backgroundImage: "url('/images/auth-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingLeft: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "160px",
          height: "100%",
        }}
      >
        <h1
          className={`${pacifico.className} text-[3rem] text-[#3B317D] leading-tight mb-4`}
          style={{ maxWidth: "800px" }}
        >
          ✨ Your Perfect Style is <br /> Just a Click Away! ✨
        </h1>
        <p
          className={`${roboto.className} text-[1.2rem] text-[#757384] opacity-80 italic`}
          style={{ maxWidth: "820px" }}
        >
          Welcome to E-shop — find your own style and goods here!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "260px",
          height: "100%",
        }}
      >
        <div style={{ width: "400px" }}>
          <SignUp />
        </div>
      </div>
    </div>
  );
}
