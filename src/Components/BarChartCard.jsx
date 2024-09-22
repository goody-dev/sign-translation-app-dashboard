import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import React from 'react'

const BarChartCard = ({title, data}) => {
  return (
    <div id="activity" className="flex flex-col justify-between items-start w-[100%] md:w-[calc(50%-1rem)] md:min-w-[375px] h-[auto] max-h-[537px] bg-[var(--white-background)] shadow-md p-[var(--tile-padding)] rounded-[1rem] border-[#EFF0F6] border-[1px] border-solid">
      <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>{title}</p>
      <ResponsiveContainer width="100%" height={240} background={{ fill: "#FF00F3" }}>
        <BarChart data={data} barSize={10}>
          <XAxis scale="auto" dataKey='month' axisLine={false} tickLine={false} padding={{ left:10, right:10, top: 20 }} />
          <YAxis axisLine={false} tickLine={false} />
          <Bar dataKey="users" fill="var(--chart-color)" background={{ fill: "#F2F7FF" }} radius={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartCard
