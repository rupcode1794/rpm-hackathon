import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const MlGraph = ({ mlGraph }) => {
  if (!mlGraph) return null;

  // Convert single MLResult → array (required by recharts)
  const chartData = [
    {
      time: new Date(mlGraph.windowTime).toLocaleTimeString(),
      anomalyScore: mlGraph.anomalyScore,
      hrMean: mlGraph.features?.hrMean,
      spo2Min: mlGraph.features?.spo2Min,
      tempMean: mlGraph.features?.tempMean,
      accMean: mlGraph.features?.accMean
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

      {/* 1️⃣ Anomaly Score — Line */}
      <div style={{ width: "100%", height: 180 }}>
        <h4>Anomaly Score</h4>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 1]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="anomalyScore"
              stroke="#ff4d4f"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2️⃣ Vitals — Combined Line */}
      <div style={{ width: "100%", height: 240 }}>
        <h4>Vitals</h4>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />

            <Line dataKey="hrMean" stroke="#ff7300" name="Heart Rate" />
            <Line dataKey="spo2Min" stroke="#1890ff" name="SpO₂" />
            <Line dataKey="tempMean" stroke="#722ed1" name="Temperature" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3️⃣ Acceleration — Bar */}
      <div style={{ width: "100%", height: 180 }}>
        <h4>Activity (Acceleration)</h4>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="accMean" fill="#52c41a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default MlGraph;
