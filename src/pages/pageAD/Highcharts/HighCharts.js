import React from 'react'
import { Bar,Doughnut } from "react-chartjs-2";
import './charts.css';

export default function HighCharts() {
    return (
        <div className="charts">
            <Bar
                data={{
                labels: [
                    "Posts",
                    "Users",
                    "Shops",
                ],
                datasets: [
                    {
                    label: "FFW Charts",
                    backgroundColor: [
                        "#00c292",
                        "#03a9f3",
                        "#fb7146",
                                ],
                                data: [20,10, 20]
                                }
                            ]
                            }}
                options={{
                legend: { display: false },
                title: {
                    display: true,
                    // text: "Predicted world population (millions) in 2050"
                }
                }}
            />
            <div className="chart2">
                <Doughnut
                        data={{
                        labels: [
                            "Posts",
                            "Users",
                            "Shops",
                        ],
                        datasets: [
                            {
                            label: "FFW Charts",
                            backgroundColor: [
                                "#00c292",
                                "#03a9f3",
                                "#fb7146",
                            ],
                            data: [20,10, 20]
                            }
                        ]
                        }}
                        option={{
                        title: {
                            display: true,
                            // text: "Predicted world population (millions) in 2050"
                        }
                        }}
                    />
                </div>
        </div>
    )
}
