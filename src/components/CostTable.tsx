/* eslint-disable */
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ApplicationDetail, Detail } from "../io/responses/commonResponses";

export default function CostTable({ detail }: { detail: ApplicationDetail }) {
  const [propsDetail, setPropsDetail] = useState(detail);
  const [rows, setrows] = useState<Detail[]>([]);

  React.useEffect(() => {
    setPropsDetail(detail);
  }, [detail]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "ConsumedQuantity", headerName: "ConsumedQuantity", width: 70 },
    { field: "Cost", headerName: "Cost", width: 130 },
    { field: "Date", headerName: "Date", width: 130 },
    { field: "InstanceId", headerName: "InstanceId", width: 130 },
    { field: "Location", headerName: "Location", width: 130 },
    { field: "MeterCategory", headerName: "MeterCategory", width: 130 },
    { field: "ResourceGroup", headerName: "ResourceGroup", width: 130 },
    { field: "ResourceLocation", headerName: "ResourceLocation", width: 130 },
    { field: "ServiceName", headerName: "ServiceName", width: 130 },
    { field: "UnitOfMeasure", headerName: "UnitOfMeasure", width: 130 },
  ];

  useEffect(() => {
    const row: any = detail?.map((detailData: Detail, index: number) => ({
      ...detailData,
      id: index + 1,
    }));
    setrows(row);
  }, [detail]);

  return (
    <div style={{ width: "100%" }}>
      {rows?.length ? (
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      ) : null}
    </div>
  );
}
