import React, { useState } from "react";
//componentes
import { Pagination, Table, TablePaginationConfig } from "antd";
import { Container, Content } from "./styles";
import { FilterValue, SorterResult } from "antd/lib/table/interface";

//declaração da página
const Taxes: React.FC = () => {
  // coisas temporárias
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  //useStates
  const [current, setCurrent] = useState(2);
  const [total, setTotal] = useState(100);
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  });

  const PaginationDefault = () => {
    return (
      <Pagination
        showQuickJumper
        defaultCurrent={current}
        total={total}
        onChange={() => onChange}
      />
    );
  };
  //useEffects

  //eventos
  const onChangeTable = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: boolean,
  ) => {
    console.log("Pagination: ", pagination);
    console.log("filter: ", filters);
    console.log("sorter", sorter);
  };
  const onChange = (page: number) => {
    console.log("Page: ", page);
  };
  // funções auxiliares

  //componente em si
  return (
    <Container>
      <Content>
        <Table
          columns={columns}
          rowKey={"record => record.login.uuid"}
          dataSource={dataSource}
          pagination={pagination}
          loading={loading}
          onChange={() => onChangeTable}
        />
        <Pagination
          showQuickJumper
          defaultCurrent={current}
          total={total}
          onChange={() => onChange}
        />
      </Content>
    </Container>
  );
};

export default Taxes;
