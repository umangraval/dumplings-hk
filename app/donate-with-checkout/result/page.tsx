import type { Stripe } from "stripe";

import PrintObject from "@/components/PrintObject";
import { stripe } from "@/lib/stripe";
import { Fade } from "react-awesome-reveal";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: any;
}): Promise<any> {
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;

  return (
    <Fade
      direction={"up"}
      delay={800}
      cascade
      damping={1e-1}
      triggerOnce={true}
    >
      <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
        Payment of{" "}
        <span className="text-pink">${paymentIntent.amount / 100}</span> is{" "}
        {paymentIntent.status}
      </p>
    </Fade>
  );
}
