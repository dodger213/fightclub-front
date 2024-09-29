import Logo from "@/components/Logo/Logo";
import Faq from "@/sections/Faq";
import Stage from "@/sections/Stagge";
import HowtoBuy from "@/sections/HowtoBuy";
import DesktopPurchaseGuide from "@/components/PurchageGuide/DesktopPurchaseGuide";
import MobilePurchaseGuide from "@/components/PurchageGuide/MobilePurchaseGuide";
import Members from "@/sections/Members";
import Footer from "@/sections/Footer";
import Image from "next/image";
import Tokenomics from "@/sections/Tokenomics";
import TokenomicsTable from "@/sections/TokenomicsTable";

export default function Home() {
  return (
    <div className="landing max-w-7xl px-10 flex flex-col gap-10">
      <div className="py-7 flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row items-end gap-14 italic uppercase">
          <Logo />
          <div className="flex flex-row items-end gap-8 text-xl font-black text-orange-900">
            <span>about</span>
            <span>buy</span>
            <span>roadmap</span>
            <span>faq</span>
          </div>
        </div>
        <button className="p-2 text-xl font-extrabold italic uppercase rounded-md bg-orange-950">
          whitepaper
        </button>
      </div>
      <div className="mt-72 w-1/2 flex flex-col justify-center items-center">
        <p className="px-28 text-center text-xl font-light">
          Empowering martial artists, engaging fans and connecting industry
          leaders for a financially rewarding experience with the FIght Club
          platform.
        </p>
        <button className="my-14 px-4 py-2 flex justify-center items-center gap-4 text-lg font-light rounded-md bg-gradient-to-r from-[#824b3d]/50 from-10% via-[#824b3d] via-50% to-[#824b3d]/50 to-90%">
          Whitepaper
        </button>
      </div>
      <div className="px-20 py-10 flex flex-row justify-around items-center gap-10 bg-[linear-gradient(to_right,_#000000,_#824b3d,_#824b3d,_#824b3d,_#000000)]">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Empower</p>
          <p className="font-light">
            Get control over your career and be seen by millions of people
            worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Revenue</p>
          <p className="font-light">
            Whether you are a fighter, fan or club, our platform offers income
            models for everyone.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Connect</p>
          <p className="font-light">
            Build your empire and get in touch with everyone, from fans to
            industry leaders.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Transparency</p>
          <p className="font-light">
            By leveraging blockchain nothing can be hidden. Its easy to use and
            fool proof.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <div className="w-3/5 flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-black italic">ABOUT FIGHTCLUB</p>
            <p>
              {`Fight Club envisions a world where martial arts transcend
              barriers, empowers individuals and unites communities. To achieve
              this, we're building a decentralized platform, powered by our
              native token FICCO, that unlocks unprecedented opportunities for
              all stakeholders in combat sports—from aspiring amateurs and
              passionate fans to seasoned professionals and dedicated clubs.
              Through FICCO, fighters can take control of their careers and
              engage directly with fans, while fans can support their favorite
              athletes and invest in their success, fostering a more equitable
              and rewarding future for the world of combat sports.`}
            </p>
            <p className="text-orange-900">Read the whole story</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="w-1/2 text-xl font-black italic">
              Exclusive FICCO Token SaleS with Guaranteed AND MYSTERY ALLOCATION
            </p>
            <div className="py-4 flex justify-center items-center">
              <Stage />
            </div>
            <p>
              {`Fight Club's native token, FICCO, is set to launch with a total
              maximum supply of 100 billion tokens. The initial price for the
              pre sale of 10 billion tokens will be set at a maximum of 0.00010
              cent per token, offering an accessible entry point for early
              adopters and investors of the platform. But there's more: FICCO
              coins that are not sold before the end date has been reached will
              be distributed pro-rata to all participants. This means you can
              get more FICCO than you originally bought, potentially bringing
              the price per FICCO coin down while increasing the quantity you
              receive. Terms apply.`}
            </p>
            <p className="text-orange-900">More information</p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-xl font-black italic">FUEL THE REVOLUTION</p>
            <p>
              <strong>Ownership and Empowerment:</strong> Purchasing FICCO coins
              grants you a stake in the Fight Club ecosystem. You become an
              integral part of a movement that empowers martial artists by
              providing them direct control over their careers and earning
              potential.
            </p>
            <p>
              <strong>Fueling the Ecosystem:</strong> FICCO coins power every
              transaction within the platform. By using FICCO, you directly
              contribute to the growth and sustainability of the Fight Club
              community, fostering a vibrant space where talent thrives and
              opportunities flourish.
            </p>
            <div>
              <p>
                <strong>Access and Rewards:</strong>{" "}
                {`Owning FICCO unlocks
              exclusive benefits within the ecosystem. This includes early
              access to events, voting rights on platform decisions,
              participation in exclusive experiences and potential rewards based
              on the platform's success.`}
              </p>
              <p className="text-orange-900">Learn more about $FICCO</p>
            </div>
          </div>
          <div>
            <Tokenomics />
          </div>
        </div>
        <div className="w-2/5 flex justify-start items-center flex-col gap-16">
          <div className="px-6 py-2 flex flex-row text-center rounded-md border text-black bg-[#d3d3c9]">
            <div className="pr-6 flex flex-col border-r border-gray-500">
              <p className="text-lg font-black italic text-orange-900">FICCO</p>
              <p className="text-xs">Native Coin</p>
            </div>
            <div className="pl-6 flex flex-col">
              <p className="text-lg font-black italic text-orange-900">
                1000000000000
              </p>
              <p className="text-xs">Max supply</p>
            </div>
          </div>
          <div>
            <Image
              src={"/assets/images/form.png"}
              alt="form"
              width={477}
              height={949}
            />
          </div>
          <div>
            <TokenomicsTable />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/assets/images/band.png"}
          alt="band"
          width={1149}
          height={185}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src={"/assets/images/roadmap.png"}
          alt="roadmap"
          width={1140}
          height={658}
        />
      </div>
      <div className="hidden lg:block">
        <DesktopPurchaseGuide />
      </div>
      <div className="block lg:hidden">
        <MobilePurchaseGuide />
      </div>
      <div className="flex justify-center">
        <Members />
      </div>
      <div className="flex justify-center">
        <Faq />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
