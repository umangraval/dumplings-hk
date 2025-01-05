import type { Metadata } from "next";
import { Fade } from "react-awesome-reveal";

export const metadata: Metadata = {
  title: "Checkout Session Result",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-40 px-6" id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
              Status
            </h3>
          </Fade>
          {children}
        </div>
      </div>
    </div>
  );
}
