import { useCallback, useEffect, useState } from "react";

const Countdown = ({ time }) => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    let days =
      Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDifference / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )
        : `0${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;
    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date(time).getTime();
    setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);
  }, [time]);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-8 sm:gap-16">
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-lightPink rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#BB2E2A]">
                {countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-red text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-lightPink rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#BB2E2A]">
                {countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-red text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-lightPink  rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#BB2E2A]">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-red text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-lightPink rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#BB2E2A]">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-red text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
