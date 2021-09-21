export interface iDashboard {
    version: number;
    columns: number;
    widgets: iWidget[];
}
export interface iWidget {
    type: "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar";
    column: number;
    columnSpan: number;
    priority: number;
    source: string | any;
    options: ApexOptions;
}