import { useState } from 'react';
import { Table, ScrollArea, Text, TextInput } from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSearch } from '@tabler/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';

interface RowData {
  number: string;
  englishName: string;
  numberOfAyahs: string;
}

interface TableSortProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
}

const Th = ({ children }: ThProps) => {
  const { classes } = useStyles();

  return (
    <th className={classes.th}>
      <Text weight={600} size="xl" color="black">
        {children}
      </Text>
    </th>
  );
};

const filterData = (data: RowData[], search: string) => {
  const query = search.toLowerCase().trim();
  return data.filter((item) => keys(data[0]).some((key) => item[key].toLowerCase().includes(query)));
};

const sortData = (data: RowData[], payload: { search: string }) => {
  return filterData(data, payload.search);
};

const SurahListTable = ({ data }: TableSortProps) => {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);

  const { classes, theme } = useStyles();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { search: value }));
  };

  const rows = sortedData.map((row) => (
    <tr key={row.number}>
      <td>
        <Text size="md" color={theme.colors.gray[9]}>
          {row.numberOfAyahs} أيات
        </Text>
      </td>
      <td>
        <Text size="md" color="green">
          <Link to={`/surah/${row.number}`} className={classes.link}>
            {row.englishName}
          </Link>
        </Text>
      </td>
      <td>
        <Text size="md" color={theme.colors.gray[9]}>
          {row.number}.
        </Text>
      </td>

    </tr>
  ));

  return (
    <ScrollArea>
      <TextInput placeholder="البحث بأي مجال" mb="md" icon={<IconSearch size={14} stroke={1.5} />} value={search} onChange={handleSearchChange} />
      <Table striped highlightOnHover horizontalSpacing="md" verticalSpacing="md" sx={{ tableLayout: 'fixed', minWidth: 700 }}>
        <thead>
          <tr>
            <Th>إسم السورة </Th>
            <Th>عدد أياتها</Th>
            <Th>رقم السورة</Th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align="center">
                لم يتم العثور على شيء
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
};

export default SurahListTable;
