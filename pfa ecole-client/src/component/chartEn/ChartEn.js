import './chartEn.css'
import {  BarChart, Bar, LineChart, Line, XAxis,  Tooltip,ResponsiveContainer } from 'recharts';


export default function chartEn({title,data,dataKey}) {
   
    return (
        <div className="contch ">
        <div className="charts">
        <div className="chart z-depth-5">
        <h4 className="title"> {title}  </h4>
        <ResponsiveContainer width="100%"  aspect={2.5 / 1}>
            <LineChart data={data} >
            <XAxis dataKey='name' stroke="black"/>
            <Line type="monotone" dataKey={dataKey}  stroke="orangered"/>
            <Tooltip/>
            </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="chart2  z-depth-5">
        <h5 className="center"> {title}  </h5>
        <ResponsiveContainer width="100%" height="100%" aspect={1.6 / 1}>
        <BarChart   data={data}>
          <Bar dataKey={dataKey} fill="#6ccffd" height="1000"/>
          <Tooltip/>
        </BarChart>
      </ResponsiveContainer>
     
          
        </div>
        </div>
        </div>
    )
}