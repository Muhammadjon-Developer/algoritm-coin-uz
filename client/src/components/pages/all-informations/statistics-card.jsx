import React from 'react'
import { cards } from '../../../constants/data';
import { memo } from 'react'

const StatisticsCard = () => {
  return (
    <>
    { cards.map(item => (
          <div className="bg-white h-full w-[280px] rounded-lg p-4">
            <div className="flex items-center justify-between mb-16">
              <h1 className="text-2xl font-semibold text-slate-500">{item.title}</h1>
              {<item.icon className="text-3xl text-slate-500"/>}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-600">{item.count}</h3>
              <p className="text-slate-500">04/09/2024</p>
            </div>
          </div>
        ))}
    </>
        
  )
}

export default memo(StatisticsCard);