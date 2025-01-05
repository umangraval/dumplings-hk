import type { Metadata } from "next";

import Link from "next/link";
import Banner from "./components/Banner";
import Cook from "./components/Cook";
import Features from "./components/Work/index";
import Expert from "./components/Expert";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter/Newsletter";

export const metadata: Metadata = {
  title: "Dumplings Kitchen",
};

export default function IndexPage(): JSX.Element {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
    </main>
  );
}
