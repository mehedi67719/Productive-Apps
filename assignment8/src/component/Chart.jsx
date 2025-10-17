import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const Chart = ({app}) => {
    // console.log(app.ratings)



    return (
        <div className='my-10'>
          <div className="w-full h-[300px] mt-10">
          <h2 className="text-2xl font-bold mb-4">Ratings Overview</h2>

             <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={app.ratings}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="count" fill="#ff7f00" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
           </div>
        </div>
    );
};

export default Chart;