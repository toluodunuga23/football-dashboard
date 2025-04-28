import React from "react";
import { summaryCards } from "@/helper/data";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl bold ">Football Dashboard</h1>
        <p>
          Welcome to the Football Analytics Dashboard. Here you can find various
          statistics and insights about football matches, players, and teams.
        </p>
      </div>
      <h1 className="text-2xl font-bold text-start mt-6">League Summary</h1>
      <div className="grid grid-cols-3  gap-4 place-items-center mt-6 ">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-74 border-2 border-white"
          >
            <div className="flex gap-3 ">
              <div className="flex flex-row jusiify-start">
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="w-8 h-8 mb-2  "
                />
              </div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
            </div>
            <div className="flex flex-col items-center ">
              <p className="">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
