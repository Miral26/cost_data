import React, { useEffect, useState } from "react";
import * as Events from "../services/ServiceTemplate";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CostTable from "./CostTable";

//Predefined Material Styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Applications = () => {
  const [applicationData, setApplicationData] = useState<string[]>();
  const [detailedData, setDetailedData] = useState<string>("");
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    callApplicationApi();
  }, []);

  //Application api instance
  const callApplicationApi = () => {
    Events.getApplications().then((res) => {
      setApplicationData(res);
    });
  };

  //Details callback
  const onScorecardClick = (name: string) => {
    setDetailedData(name);
  };

  useEffect(() => {
    if (detailedData) {
      callApplicationDetails(detailedData);
    }
  }, [detailedData]);

  const callApplicationDetails = (detailedData: string) => {
    Events.getApplicationByName(detailedData).then((res: any): void => {
      setDetail(res);
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Item>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Sr. No</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center" />
                </TableRow>
              </TableHead>
              {applicationData?.map((data: string, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <TableBody>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{data}</TableCell>
                      <TableCell>
                        <Button onClick={() => onScorecardClick(data)}>
                          Details
                        </Button>
                      </TableCell>
                    </TableBody>
                  </React.Fragment>
                );
              })}
            </Table>
          </TableContainer>
        </Item>
      </Grid>
      <Grid item xs={8}>
        {detail?.length ? <CostTable detail={detail} /> : null}
      </Grid>
    </Grid>
  );
};

export default Applications;
