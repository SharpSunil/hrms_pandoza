import React, { useState } from "react";
import "./TableComponent.scss";
import { Table } from "antd";

function TableComponent({ columns, data }) {
  /* ─────────────── helpers ─────────────── */
  const toURLSearchParams = (record) => {
    const params = new URLSearchParams();
    Object.entries(record).forEach(([key, value]) => {
      params.append(key, value);
    });
    return params;
  };

  const getRandomuserParams = (params) => {
    const { pagination, filters, sortField, sortOrder, ...restParams } = params;
    const result = {};

    // pagination
    result.limit = pagination?.pageSize;
    result.page = pagination?.current;

    // filters
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          result[key] = value;
        }
      });
    }

    // sorting
    if (sortField) {
      result.orderby = sortField;
      result.order = sortOrder === "ascend" ? "asc" : "desc";
    }

    // other params
    Object.entries(restParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
    });

    return result;
  };

  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: { current: 1, pageSize: 10 },
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });
  };

  return (
    <>
      <Table
        scroll={{ x: 4000 }}
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        loading={loading}
        onChange={handleTableChange}
      />
    </>
  );
}

export default TableComponent;
