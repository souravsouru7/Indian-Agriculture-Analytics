Indian Agriculture Analytics

A data visualization application for analyzing Indian agriculture data (1950-2020) using TypeScript, React, and Mantine UI components. This project processes and displays agricultural production data from the National Data and Analytics Platform (NITI Aayog).

Features

Yearly Production Analysis: Displays maximum and minimum crop production data for each year from 1950 to 2020
Crop Performance Metrics: Shows average yield and cultivation area for all crops over the entire period
Clean UI: Responsive interface built with Mantine v7 components
Type-Safe: Fully implemented in TypeScript for robust data handling


Screenshots
![alt text](<Screenshot 2024-11-12 160849.png>) ![alt text](<Screenshot 2024-11-12 160833.png>) ![alt text](<Screenshot 2024-11-12 160813.png>) ![alt text](<Screenshot 2024-11-12 160729.png>)
Yearly Production Analysis showing maximum and minimum producing crops


![alt text](<Screenshot 2024-11-12 160914-1.png>)
Average yield and cultivation area for each crop

Tech Stack

TypeScript
React
Vite
Mantine v7
No additional helper libraries used

Project Structure
indian-agro-analytics/
├── src/
│   ├── assets/
│   │   └── Manufac_India_Agro_Dataset.json
│   ├── components/
│   │   ├── ProductionTable.tsx
│   │   └── AveragesTable.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── dataProcessing.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

Setup Instructions
 git clone https://github.com/souravsouru7/Indian-Agriculture-Analytics.git
 cd indian-agro-analytics

 Install dependencies
 yarn install

Start the development server:
yarn dev

Data Processing

Missing values in the dataset are treated as 0
All average values are rounded to 3 decimal places
Data is processed efficiently using optimized aggregation functions
Type safety is maintained throughout the data processing pipeline

Implementation Details

Uses Mantine v7 Tables for data display
Implements responsive design for various screen sizes
Includes error handling for data processing
Provides loading states for better user experience

Performance Considerations

Efficient data processing using single-pass algorithms
Memoized calculations to prevent unnecessary recomputation
Optimized rendering using React's built-in performance features

Development Guidelines

Maintain type safety by using TypeScript interfaces
Follow the existing project structure
Use Mantine components for UI elements
Ensure all calculations maintain 3 decimal precision
Test across different screen sizes

Requirements

Node.js 14+
Yarn package manager
Modern web browser

