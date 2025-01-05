import type { Metadata } from "next";

import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Dumpling Kitchen",
};

export default function DonatePage(): JSX.Element {
  return <CheckoutForm uiMode="hosted" />;
}
