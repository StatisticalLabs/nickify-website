import Image from "next/image";
import Link from "next/link";
import Balancer, { Provider as BalancerProvider } from "react-wrap-balancer";

export default function Landing() {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-6 py-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <BalancerProvider>
          <Balancer as="h1" className="text-4xl font-bold xs:text-5xl">
            Subscriber counts. Nicknames. Why not{" "}
            <span className="inline-block bg-gradient-to-b from-red-500 to-red-600 bg-clip-text font-black text-transparent">
              both
            </span>
            ?
          </Balancer>
          <Balancer as="p">
            In one command, you can make your subscriber count visible in your
            nickname.
          </Balancer>
        </BalancerProvider>
        <Link
          href="/docs"
          className="group relative mt-1 rounded-lg bg-blue-600 px-3 py-1.5 text-white dark:text-inherit"
        >
          <span className="absolute -inset-0.5 bg-blue-600 opacity-75 blur-md transition-all group-hover:opacity-100" />
          <span className="relative">
            Get started{" "}
            <span className="inline-block transition-all group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
        <div className="p-1" />
        <div className="relative mx-auto">
          <span className="absolute -inset-0.5 bg-[#323339] blur-lg" />
          <div className="relative overflow-hidden rounded-lg bg-[#323339]">
            <Link
              href="https://youtube.com/@GraphifyStatistics"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[1.04rem] top-5 h-[90px] w-[90px] rounded-full"
            />
            <Link
              href="https://youtube.com/@GraphifyStatistics"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-36 top-6 h-[35px] w-[247px]"
            />
            <Image src="/example.png" alt="Example" width={627} height={133} />
          </div>
        </div>
      </div>
    </div>
  );
}
