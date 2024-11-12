import { Table, Title, Paper } from '@mantine/core';
import { YearlyProduction } from '../types';

interface ProductionTableProps {
  data: YearlyProduction[];
}

const ProductionTable = ({ data }: ProductionTableProps) => {
  return (
    <Paper mb="xl" p="md">
      <Title order={2} mb="md">Yearly Production Analysis</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production</Table.Th>
            <Table.Th>Crop with Minimum Production</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.year}>
              <Table.Td>{row.year.replace('Financial Year (Apr - Mar), ', '')}</Table.Td>
              <Table.Td>{row.maxCrop}</Table.Td>
              <Table.Td>{row.minCrop}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
};

export default ProductionTable;