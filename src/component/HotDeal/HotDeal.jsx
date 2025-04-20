import React, { useState, useEffect } from "react";

const HotDeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 23,
    minutes: 58,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(timer); // Stop the timer when countdown finishes
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/background/hot.avif')", // <-- Added example image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Exclusive Hot Deal Ends Soon!
        </h2>
        <p className="text-white/80 text-sm mb-8">
          Visit us in-store/online and grab this weekly special
        </p>

        <div className="grid grid-cols-4 gap-4 bg-white/90 p-4 rounded-lg w-full max-w-md mb-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span className="text-xs text-gray-600">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <span className="text-xs text-gray-600">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <span className="text-xs text-gray-600">Mins</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <span className="text-xs text-gray-600">Secs</span>
          </div>
        </div>

        <button className="mt-3 w-32 bg-[#48B4BB]  font-bold text-white py-2 rounded-md hover:bg-white hover:text-[#48B4BB] hover:border-[#48B4BB]">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HotDeal;
