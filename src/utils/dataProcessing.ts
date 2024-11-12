// src/utils/dataProcessing.ts
import { CropData, YearlyProduction, CropAverages } from '../types';

export const preprocessData = (data: CropData[]): {
  yearlyProduction: YearlyProduction[];
  cropAverages: CropAverages[];
} => {
  // Group data by year
  const yearGroups: Record<string, CropData[]> = {};
  const cropTotals: Record<string, { 
    totalYield: number;
    totalArea: number;
    count: number;
  }> = {};

  // Process each data entry
  data.forEach((entry) => {
    const year = entry.Year;
    if (!yearGroups[year]) {
      yearGroups[year] = [];
    }
    yearGroups[year].push(entry);

    // Update crop totals
    const crop = entry["Crop Name"];
    if (!cropTotals[crop]) {
      cropTotals[crop] = {
        totalYield: 0,
        totalArea: 0,
        count: 0
      };
    }
    
    const yieldValue = entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0;
    const area = entry["Area Under Cultivation (UOM:Ha(Hectares))"] || 0;
    
    cropTotals[crop].totalYield += yieldValue;
    cropTotals[crop].totalArea += area;
    cropTotals[crop].count += 1;
  });

  // Calculate yearly production stats
  const yearlyProduction: YearlyProduction[] = Object.entries(yearGroups)
    .map(([year, crops]) => {
      let maxProd = -Infinity;
      let minProd = Infinity;
      let maxCrop = '';
      let minCrop = '';

      crops.forEach((crop) => {
        const production = crop["Crop Production (UOM:t(Tonnes))"] || 0;
        if (production > maxProd) {
          maxProd = production;
          maxCrop = crop["Crop Name"];
        }
        if (production < minProd && production > 0) {
          minProd = production;
          minCrop = crop["Crop Name"];
        }
      });

      return {
        year,
        maxCrop,
        maxProduction: maxProd,
        minCrop,
        minProduction: minProd
      };
    })
    .sort((a, b) => parseInt(a.year) - parseInt(b.year));

  // Calculate crop averages
  const cropAverages: CropAverages[] = Object.entries(cropTotals)
    .map(([crop, totals]) => ({
      crop,
      avgYield: Number((totals.totalYield / totals.count).toFixed(3)),
      avgArea: Number((totals.totalArea / totals.count).toFixed(3))
    }))
    .sort((a, b) => b.avgYield - a.avgYield);

  return { yearlyProduction, cropAverages };
};