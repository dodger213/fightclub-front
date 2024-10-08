import TrackImg from "@/components/trackImg";
import Stage from "./Stage";

const TokenSaleS = () => {
  return (
    <div className="flex flex-col gap-2 items-center lg:items-start w-full overflow-visible text-center lg:text-left">
      <div className="max-w-md font-revoluti text-[#dbdbcf]">
        <span className="relative">
          Exclusive FICCO Token SaleS with Guaranteed AND MYSTERY ALLOCATION
          <TrackImg className="absolute top-0  overflow-auto md:translate-x-80  -translate-y-24 -z-10  w-[240px] h-[240px]" />
        </span>
      </div>
      <div className="py-2 w-full">
        <Stage />
      </div>
      <p className="font-helvetica font-light text-base scale-x-90 scale-y-105 -mx-8">
        IRONWILL&apos;s native token, FICCO, is set to launch with a total
        maximum supply of 100 billion tokens. The initial price for the pre sale
        of 10 billion tokens will be set at a maximum of 0.00010 cent per token,
        offering an accessible entry point for early adopters and investors of
        the platform. But there&apos;s more: FICCO coins that are not sold
        before the end date has been reached will be distributed pro-rata to all
        participants. This means you can get more FICCO than you originally
        bought, potentially bringing the price per FICCO coin down while
        increasing the quantity you receive. Terms apply.
      </p>
      <p className="font-helvetica font-light text-base text-[#824b3d]">
        More information
      </p>
    </div>
  );
};

export default TokenSaleS;
