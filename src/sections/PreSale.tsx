"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";

interface TimeDifference {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diffFromNow(targetDate: Date): TimeDifference {
  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const millisecondsDiff = targetDate.getTime() - now.getTime();

  // If the target date is in the past, return a message
  if (millisecondsDiff < 0) {
    return {
      days: -1,
      hours: -1,
      minutes: -1,
      seconds: -1,
    };
  }

  // Calculate total seconds from milliseconds
  const totalSeconds = Math.floor(millisecondsDiff / 1000);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const PreSaleInterface: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeDifference>({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [progress] = useState(0);
  const [amountETH, setAmountETH] = useState("0.0");
  const [getAmount, setGetAmount] = useState("0.0");
  const [paymentType, setPaymentType] = useState("ETH");
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-10-12T12:00:00Z"); // Specify your target date here
    const difference = diffFromNow(targetDate);
    setTimeLeft(difference);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text);
  //   alert("Copied to clipboard!");
  // };

  return (
    <div className="text-[#dbdbcf] flex items-center justify-center sm:px-8 md:px-12 lg:px-4 max-w-lg min-w-lg">
      <div className="border border-[#824B3D] rounded-lg shadow-lg w-full">
        <div className="w-full bg-[#131511] rounded-lg text-center py-4">
          <h1 className="text-2xl font-revoluti font-bold mb-4">PRE SALE 1</h1>
          <div className="px-2 mb-4 items-center">
            <div className="w-full bg-[#787871] border-[#824B3D] border-2 rounded-lg h-8">
              <div
                className="relative bg-[#824B3D] h-7 rounded-l-lg flex justify-end"
                style={{ width: `${(progress / 1000000) * 100}%` }}
              >
                <div className="absolute top-10 transform translate-x-1/2">
                  <div className="relative inline-block bg-[#e8e6d9] py-1 px-2 rounded">
                    <div className="absolute left-1/2 -top-1 w-2 h-2 bg-[#e8e6d9] transform -translate-x-1/2 rotate-45"></div>
                    <span className="text-base text-[#824B3D] font-bold font-revoluti">
                      {"$" + progress}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-3 ">
              <span className="text-base font-bold font-revoluti text-[#dbdbcf]">
                $1,000,000
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-bold text-[#824b3d]">
              Current maximum price: $ 0.0001
            </p>
            <p className="text-sm font-bold text-[#dbdbcf]">
              Sale 2 maximum price: $ 0.0004
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold font-revoluti text-xl text-[#dbdbcf]">
              TIME UNTIL PRE-SALE
            </p>
          </div>

          <div className="px-12 grid grid-cols-4 gap-6 mb-14">
            <div className="bg-[#212121] border border-orange-900 p-1 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.days}</div>
              <div className="text-sm">days</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-1 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.hours}</div>
              <div className="text-sm">hours</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-1 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.minutes}</div>
              <div className="text-sm">minutes</div>
            </div>
            <div className="bg-[#212121] border border-orange-900 p-1 rounded">
              <div className="text-2xl font-revoluti">{timeLeft.seconds}</div>
              <div className="text-sm">seconds</div>
            </div>
          </div>

          <div className="px-6 grid grid-cols-2 gap-4 mb-10">
            <button
              className={`bg-[#353535] border ${
                paymentType === "ETH"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              } p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("ETH")}
            >
              <span className="w-6 h-6 mr-1 sm:mr-2 flex justify-center items-center rounded-full bg-[#6274dd]">
                <Image
                  src={"/assets/icons/ethereum-eth-logo-colored.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-6 h-5"
                />
              </span>{" "}
              Pay with ETH
            </button>
            <button
              className={`bg-[#353535] border ${
                paymentType === "USDT"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              } pl-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("USDT")}
            >
              <span className="w-6 h-6 mr-1 sm:mr-2 flex justify-center items-center rounded-full bg-[#389770]">
                <Image
                  src={"/assets/icons/tether-usdt-logo.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-6 h-5"
                />
              </span>{" "}
              Pay with USDT
            </button>
            <button
              className={`bg-[#353535] border ${
                paymentType === "DAI"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              }  p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("DAI")}
            >
              <Image
                src={"/assets/icons/multi-collateral-dai-dai-logo.svg"}
                alt="icon"
                width={24}
                height={24}
                className="mr-1 lg:mr-2 rounded-full"
              />{" "}
              Pay with DAI
            </button>
            <button
              className={`bg-[#353535] border ${
                paymentType === "USDC"
                  ? "border-orange-900 border-2"
                  : "border-gray-600"
              }  p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
              onClick={() => setPaymentType("USDC")}
            >
              <Image
                src={"/assets/icons/usd-coin-usdc-logo.svg"}
                alt="icon"
                width={24}
                height={24}
                className="mr-1 lg:mr-2 rounded-full bg-white"
              />{" "}
              Pay with USDC
            </button>
          </div>

          <div className="px-4 grid grid-cols-2 gap-4 mb-4">
            <div className="text-left">
              <label className="block text-sm mb-1 sm:font-bold">
                AMOUNT (ETH)
              </label>
              <input
                type="number"
                value={amountETH}
                onChange={(e) => setAmountETH(e.target.value)}
                className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm mb-1 sm:font-bold">
                GET AMOUNT(FICCO)
              </label>
              <input
                type="number"
                value={getAmount}
                onChange={(e) => setGetAmount(e.target.value)}
                className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1 sm:font-bold">
              CURRENT MYSTERY FICCO
            </label>
            <input
              type="number"
              value="0.0"
              readOnly
              className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-[50%]"
            />
          </div>

          <button
            className="w-[70%] bg-[#824B3D] p-3 rounded font-bold mb-4 focus:bg-orange-800 truncate"
            onClick={() => setConnect(!connect)}
          >
            {connect ? "0x53845...e9" : "CONNECT WALLET"}
          </button>

          {connect && (
            <div className="">
              <p className="text-sm font-bold">Your current holdings:</p>
              <p className="text-sm mb-2">0 USDT</p>
              <p className="text-sm font-bold">Balance PICCO</p>
              <p className="text-sm">0</p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-between bg-[#353535] border-t border-orange-900 p-2 rounded-b-lg">
          <span className="text-xs font-bold">Contract address:</span>
          <div className="flex items-center gap-2 mt-1 justify-center w-[90%]">
            <span className="text-xs">TBA</span>
            {/* <button
              className="px-2 py-0.5 text-xs rounded-md bg-[#824B3D] hover:focus:bg-orange-800"
              onClick={() =>
                copyToClipboard("0x5384545c3190474713bdc48c3371fdbccd2b8e9")
              }
            >
              COPY
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSaleInterface;
