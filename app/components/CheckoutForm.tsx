"use client";

import type Stripe from "stripe";

import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import CustomDonationInput from "@/components/CustomDonationInput";

import { formatAmountForDisplay } from "@/utils/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "@/actions/stripe";

interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
}

export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
  const [loading] = useState<boolean>(false);
  const [input, setInput] = useState<{ customDonation: number }>({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const formAction = async (data: FormData): Promise<void> => {
    const { url } = await createCheckoutSession(data);

    window.location.assign(url as string);
  };

  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-2xl bg-pink br-50 md:max-w-7xl mt-48 rounded-lg">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
            {/* COLUMN-1 */}
            <div className="col-span-7">
              <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
                <Fade
                  direction={"up"}
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="text-lg font-normal text-white mb-3 ls-51">
                    {" "}
                    NEWSLETTER{" "}
                  </h3>
                </Fade>
                <Fade
                  direction={"up"}
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="text-3xl md:text-5xl font-semibold text-white mb-8">
                    Subscribe our <br /> newsletter.
                  </h3>
                </Fade>

                <div>
                  <Fade
                    direction={"up"}
                    delay={1200}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    <form action={formAction}>
                      <div className="relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full">
                        <input
                          type="hidden"
                          name="uiMode"
                          value={props.uiMode}
                        />
                        <input
                          type="number"
                          name="customDonation"
                          className="py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black"
                          placeholder="Enter Amount"
                          onChange={handleInputChange}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                          <button
                            type="submit"
                            className="p-1 focus:outline-none focus:shadow-outline"
                            disabled={loading}
                          >
                            <Image
                              src={"/images/Newsletter/arrow.svg"}
                              alt="inputicon"
                              width={57}
                              height={71}
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </Fade>
                </div>
              </div>
            </div>

            {/* COLUMN-2 */}
            <div className="col-span-5 relative hidden md:block">
              <div>
                <Image
                  src={"/images/Newsletter/soup.svg"}
                  alt="soup-image"
                  width={626}
                  height={602}
                  className="-mt-24"
                />
              </div>
              <div className="absolute top-[78%]">
                <Image
                  src={"/images/Newsletter/onion.svg"}
                  alt="onion-image"
                  width={300}
                  height={122}
                />
              </div>
              <div className="absolute top-[30%] right-[-23%] hidden lg:block">
                <Image
                  src={"/images/Newsletter/lec.svg"}
                  alt="lettuce-image"
                  width={300}
                  height={122}
                />
              </div>
              <div className="absolute bottom-[10%] left-[0%]">
                <Image
                  src={"/images/Newsletter/yellow.svg"}
                  alt="yellow-image"
                  width={59}
                  height={59}
                />
              </div>
              <div className="absolute bottom-[20%] right-[20%]">
                <Image
                  src={"/images/Newsletter/blue.svg"}
                  alt="blue-image"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
