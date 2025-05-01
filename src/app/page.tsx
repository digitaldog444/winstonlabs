import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <section className="flex justify-center items-center h-screen">
        <div>
          <Image
            alt="Winston Labs"
            src="/logo.jpg"
            height="1080"
            width="1920"
          />
        </div>
      </section>
      <section className="flex justify-center items-center h-screen mt-8">
        <div>
          <h2 className="text-2xl font-bold text-center">Our Mission</h2>
          <p className="text-justify mt-4 p-4 max-w-256 w-full">
            Our mission is to innovate, develop, and deploy AI technologies that
            address real-world problems—from healthcare and climate change to
            education, logistics, and beyond. We are passionate advocates for
            the responsible integration of AI into everyday life, believing it
            has the potential to transform industries, uplift communities, and
            unlock human potential on a global scale. At Winston Labs, we don’t
            just envision a future powered by AI—we’re building it.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center h-screen">
        <div>
          <h2 className="text-2xl font-bold text-center">Current Projects</h2>
          <div className="mt-4">
            <div className="border-amber-500 border-2 rounded-md p-4">
              <h3 className="text-2xl">Winston</h3>
              <p className="pt-2 border-t-orange-400">
                Winston is an AI matchmaker. He will find the partner the AI
                thinks is best for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center h-screen">
        <div>
          <h2 className="text-2xl text-center">Join Us</h2>
          <p className="text-center">
            Join us on our{" "}
            <Link
              className="text-orange-500 hover:text-orange-300"
              href="https://discord.gg/BPHzYqXaKB"
            >
              Discord
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
