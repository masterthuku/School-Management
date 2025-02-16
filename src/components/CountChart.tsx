"use client";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
];

import Image from "next/image";
import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
        />
      </div>
      {/* chart */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,565</h1>
          <h2 className="text-xs text-gray-300">Boys (60%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,205</h1>
          <h2 className="text-xs text-gray-300">Girls (40%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
