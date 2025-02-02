import Script from "next/script";
import Home from "../components/main/Home";
export default function HomePage() {
  return (
    <>
      <Script
        src="code.tidio.co/lbaoat4dzizpmilf263rjuksqrd5g6wg.js"
        strategy="afterInteractive"
        async
      ></Script>
      <Home />
    </>
  );
}
