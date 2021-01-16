import { Paper } from "@material-ui/core";
import React from "react";
import { Button, Grid, GridColumn, GridRow } from "semantic-ui-react";
import BarChart from "./components/charts/BarChart";
import AreaChart from "./components/charts/AreaChart";
import "./styles.scss";
import LineChart from "./components/charts/LineChart";
import EmpList from "./components/employee/EmpList";
import ListBoxNum from "./components/boxnum/ListBoxNum";
import ListFlashCard from "./components/flashinfo/ListFlashCard";

const Home = () => {
  return (
    <div className="home">
      <div className="chart">
        <Grid>
          <GridRow>
            <GridColumn computer={16} mobile={16}>
              <ListFlashCard />
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn computer={11} mobile={16} className="chart-main">
              <Paper className="wrap-chart">
                <p className="wrap-chart-title">Doanh thu 6 tháng</p>
                <AreaChart />
              </Paper>
            </GridColumn>
            <GridColumn computer={5} mobile={16}>
              <BarChart />
             
            </GridColumn>
          </GridRow>

          <GridRow className="content-2">
            <GridColumn computer={10}>
              <Paper className="p-1">
                <p className="ti-def ml-1">Biểu đồ khu vực đông nam á</p>
                <LineChart />
              </Paper>
            </GridColumn>
            <GridColumn computer={6}>
              <Paper className="p-1 ml-1">
                <p className="ti-def ml-1">Trưởng Phòng Ban</p>
                <EmpList />
              </Paper>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    </div>
  );
};

export default React.memo(Home);
