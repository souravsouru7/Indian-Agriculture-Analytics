<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>Indian Agriculture Analytics 🌾</h1>
  <p>A comprehensive data visualization application for analyzing Indian agriculture data (1950-2020) built with TypeScript, React, and Mantine UI components. This project processes and visualizes agricultural production data from the National Data and Analytics Platform (NITI Aayog).</p>

  <p><strong>Live Demo:</strong> <a href="https://indian-agriculture-analytics.vercel.app/" target="_blank">Indian Agriculture Analytics</a></p>

  <h2>Features ✨</h2>
  <ul>
    <li><strong>Yearly Production Analysis</strong>: Track maximum and minimum crop production data (1950-2020)</li>
    <li><strong>Crop Performance Metrics</strong>: View average yield and cultivation area across all crops</li>
    <li><strong>Clean UI</strong>: Modern, responsive interface using Mantine v7 components</li>
    <li><strong>Type-Safe</strong>: Robust data handling with full TypeScript implementation</li>
  </ul>

  <h2>Screenshots 📸</h2>
  <ul>
    <li><h2>Production Analysis Dashboard</h2></li>
    <img src="./Screenshot 2024-11-12 160729.png" alt="Production Analysis Dashboard" width="600">
    <img src="./Screenshot 2024-11-12 160813.png" alt="Production Analysis Dashboard" width="600">
    <img src="./Screenshot 2024-11-12 160833.png" alt="Production Analysis Dashboard" width="600">
    <img src="./Screenshot 2024-11-12 160849.png" alt="Production Analysis Dashboard" width="600">
    <li><h2>Production Analysis Crop Statistics Data Visualization Overview</h2></li>
    <img src="./Screenshot 2024-11-12 160914.png" alt="Production Analysis Dashboard" width="600">
  </ul>

  <h2>Tech Stack 🛠️</h2>
  <table>
    <tr><th>Technology</th><th>Purpose</th></tr>
    <tr><td>TypeScript</td><td>Language</td></tr>
    <tr><td>React</td><td>Frontend Framework</td></tr>
    <tr><td>Vite</td><td>Build Tool</td></tr>
    <tr><td>Mantine v7</td><td>UI Components</td></tr>
  </table>

  <h2>Project Structure 📁</h2>
  <pre>
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
  </pre>

  <h2>Getting Started 🚀</h2>
  <ol>
    <li>Clone the repository</li>
    <pre><code>git clone https://github.com/souravsouru7/Indian-Agriculture-Analytics.git</code></pre>
    <pre><code>cd indian-agro-analytics</code></pre>
    <li>Install dependencies</li>
    <pre><code>yarn install</code></pre>
    <li>Start development server</li>
    <pre><code>yarn dev</code></pre>
  </ol>

  <h2>Data Processing 📊</h2>
  <ul>
    <li>Missing values defaulted to 0</li>
    <li>Average values rounded to 3 decimal places</li>
    <li>Optimized aggregation functions</li>
    <li>Type-safe data processing pipeline</li>
  </ul>

  <h2>Implementation Details 💡</h2>
  <table>
    <tr><th>Feature</th><th>Description</th></tr>
    <tr><td>Data Display</td><td>Mantine v7 Tables</td></tr>
    <tr><td>Design</td><td>Responsive across devices</td></tr>
    <tr><td>Error Handling</td><td>Robust error management</td></tr>
    <tr><td>UX</td><td>Intuitive loading states</td></tr>
  </table>

  <h2>Performance Considerations ⚡</h2>
  <ul>
    <li>Single-pass data processing algorithms</li>
    <li>Memoized calculations</li>
    <li>Optimized React rendering</li>
  </ul>

  <h2>Development Guidelines 👩‍💻</h2>
  <ul>
    <li>Maintain TypeScript interfaces</li>
    <li>Follow established project structure</li>
    <li>Use Mantine UI components</li>
    <li>Preserve 3 decimal precision</li>
    <li>Cross-device testing</li>
  </ul>

  <h2>Requirements 📋</h2>
  <ul>
    <li>Node.js 14+</li>
    <li>Yarn package manager</li>
    <li>Modern web browser</li>
  </ul>

</body>
</html>
