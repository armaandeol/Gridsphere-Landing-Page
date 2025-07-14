"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import soilHealth from '../assets/soil_health.jpg';
import climate from '../assets/climate.jpg';
import drip from '../assets/drip_line.jpg';
import student from '../assets/student.jpg';

export function Benefits() {
  return (
    <div className="h-screen  w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

// Use Case Components
const UseCaseOne = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">🔬</span>
        <p className="font-bold md:text-2xl text-xl ">
          Soil Health Monitoring
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium ">Agricultural University Research Plot</p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Objective:</span> Study fertilizer effects on nutrient retention and crop yield
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Portable Soil Health Monitor (NPK + Moisture)
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Outcome:</span> Optimized fertilizer timing/dosage through high-frequency soil testing
        </p>
      </div>
    </div>
  );
};

const UseCaseTwo = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">🌦️</span>
        <p className="font-bold md:text-2xl text-xl">
          Microclimate Monitoring
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium ">Semi-urban Greenhouse</p>
        <p className="font-normal text-sm">
          <span className="font-semibold">Objective:</span> Study crop behavior in controlled vs natural environments
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Smart Farm Monitoring Station
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Outcome:</span> Optimized greenhouse ventilation and watering strategies
        </p>
      </div>
    </div>
  );
};

const UseCaseThree = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">💧</span>
        <p className="font-bold md:text-2xl text-xl">
          Smart Irrigation Trials
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium ">Rajasthan Field Demonstration Farm</p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Objective:</span> Reduce water usage in drought-prone areas
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Smart Irrigation System + Soil Moisture Probes
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Outcome:</span> 35% water reduction without compromising crop yield
        </p>
      </div>
    </div>
  );
};

const UseCaseFour = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">🎓</span>
        <p className="font-bold md:text-2xl text-xl">
          Student Agritech Projects
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium text-gray-700">B.Tech Final Year Projects</p>
        <p className="font-normal text-sm">
          <span className="font-semibold">Objective:</span> Prototype real-world IoT/AI agriculture applications
        </p>
        <p className="font-normal text-sm ">
          <span className="font-semibold">Tools:</span> Full monitoring suite + Cloud Dashboard
        </p>
        <p className="font-normal text-sm">
          <span className="font-semibold">Outcome:</span> Hands-on learning with real deployments and publications
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <UseCaseOne />,
    className: "md:col-span-2",
    thumbnail: soilHealth
  },
  {
    id: 2,
    content: <UseCaseTwo />,
    className: "col-span-1",
    thumbnail: climate
  },
  {
    id: 3,
    content: <UseCaseThree />,
    className: "col-span-1",
    thumbnail: drip
  },
  {
    id: 4,
    content: <UseCaseFour />,
    className: "md:col-span-2",
    thumbnail: student
  },
];