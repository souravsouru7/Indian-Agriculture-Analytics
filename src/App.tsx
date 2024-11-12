import { useState, useEffect } from 'react';
import { Container, Title, LoadingOverlay, Alert } from '@mantine/core';
import ProductionTable from './components/ProductionTable';
import AveragesTable from './components/AveragesTable';
import { preprocessData } from './utils/dataProcessing';
import { CropData, YearlyProduction, CropAverages } from './types';
import data from './assets/Manufac _ India Agro Dataset.json';

function App() {
  const [yearlyProduction, setYearlyProduction] = useState<YearlyProduction[]>([]);
  const [cropAverages, setCropAverages] = useState<CropAverages[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (!Array.isArray(data)) {
        throw new Error('Data is not in the expected format');
      }
      const processedData = preprocessData(data as CropData[]);
      setYearlyProduction(processedData.yearlyProduction);
      setCropAverages(processedData.cropAverages);
      setError(null);
    } catch (error) {
      console.error('Error processing data:', error);
      setError(`Failed to process data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  }, []);

  if (error) {
    return (
      <Container>
        <Alert color="red" title="Error">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container size="xl" p="md">
      <LoadingOverlay visible={loading} />
      <Title order={1} mb="xl">Indian Agriculture Analytics</Title>
      {yearlyProduction.length > 0 ? (
        <>
          <ProductionTable data={yearlyProduction} />
          <AveragesTable data={cropAverages} />
        </>
      ) : (
        <Alert color="gray">No data available</Alert>
      )}
    </Container>
  );
}

export default App;