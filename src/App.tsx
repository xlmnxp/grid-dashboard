import React, { Component } from 'react'
import Chart from "react-apexcharts";
import yaml from "yamljs";

import Header from './components/Header/Header';
import { GridLayout, GridLayoutItem } from './components/GridLayout/GridLayout';
import { iDashboard, iWidget } from './types/widget';

import "./App.css";
export default class App extends Component {
  state = {
    columns: 3,
    widgets: []
  }

  async componentDidMount() {
    // you will find the file in public directory 
    let dashboardWidgets: iDashboard = yaml.load("./dashboard.yaml");
    let widgets: iWidget[] = (await Promise.all(dashboardWidgets.widgets.map(async (widget: iWidget) => {
      if (typeof widget.source == "string") {
        widget.source = await fetch(widget.source).then(data => data.json());
      }

      return widget;
    })));

    this.setState({
      columns: dashboardWidgets.columns,
      widgets
    });
  }

  render() {
    return (
      <>
        <Header>Dashboard</Header>
        <GridLayout columns={this.state.columns} columnGap="5px" rowGap="5px">
          {this.state.widgets.map((widget: iWidget, index: number) => {
            return (<GridLayoutItem key={index} {...widget}>
                <Chart options={widget.options} series={widget.source} type={widget.type}></Chart>
            </GridLayoutItem>)
          })}
        </GridLayout>
      </>
    )
  }
}