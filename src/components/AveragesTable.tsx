import { Table, Title, Paper } from '@mantine/core';
import { CropAverages } from '../types';

interface AveragesTableProps {
  data: CropAverages[];
}

const AveragesTable = ({ data }: AveragesTableProps) => {
  return (
    <Paper p="md">
      <Title order={2} mb="md">Crop Performance Averages (1950-2020)</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th>Average Yield (Kg/Ha)</Table.Th>
            <Table.Th>Average Cultivation Area (Ha)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.crop}>
              <Table.Td>{row.crop}</Table.Td>
              <Table.Td>{row.avgYield}</Table.Td>
              <Table.Td>{row.avgArea}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
};

export default AveragesTable;