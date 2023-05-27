"use client";
import { Header } from "../components/Header";
import React, { useState } from "react";
import getLeads from "../api/data/leads";
import Avatar from "../components/Avatar";
import Lead from "../components/Lead";
import Controls from "../components/Controls";
import Image from "next/image";

export default function Home() {
  const [leads, setLeads] = useState(getLeads);
  const [queue, setQueue] = useState(0);
  const [index, setIndex] = useState(0);

  const calculateProgress = () => {
    console.log(index, leads.length);
    return ((queue / leads.length) * 100).toFixed(1) + "%";
  };

  return (
    <div className="h-screen w-full overscroll-y-auto px-12 pb-6 pt-4">
      <div className="flex items-baseline justify-between py-4">
        <div className="my-2 flex flex-col  ">
          <h1 className="text-3xl font-semibold text-gray-800">
            Generated Leads
          </h1>
          <h1 className="text-base font-medium text-gray-800">
            Please select and approve the leads generate for you
          </h1>
        </div>
        <div className="mb-5 flex -space-x-4">
          {leads.slice(0, 7)?.map((lead: any, idx: number) => (
            <Avatar
              size="w-10 h-10"
              url={lead.avatar}
              key={idx}
              length={leads.length}
              last={idx === 6}
            />
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-lg bg-gray-300">
        <div
          style={{ width: calculateProgress() }}
          className="h-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
        ></div>
      </div>

      {leads.length === 0 ? (
        <div className="flex h-2/3 w-full flex-col items-center justify-center gap-4">
          <Image width={200} height={200} src="/success-2.gif" alt="Success" />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-4xl font-semibold text-gray-800">
              You&apos;re all done!
            </h3>
            <p className="text-sm font-medium text-gray-800">
              We&apos;ll get the campaign started and let you know how it&apos;s
              progressing.
            </p>
          </div>
        </div>
      ) : (
        <>
          <Header
            index={index}
            setIndex={setIndex}
            leadsArr={leads}
            queue={queue}
          />
          <Lead data={leads[index]} />
          <Controls
            leadsArr={leads}
            setLeads={setLeads}
            index={index}
            setQueue={setQueue}
          />
        </>
      )}
    </div>
  );
}
