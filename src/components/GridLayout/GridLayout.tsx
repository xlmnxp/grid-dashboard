import React, { Component, CSSProperties, Children } from 'react';
import './GridLayout.css';

export interface GridLayoutProps {
    columns?: number,
    rows?: number,
    columnGap?: CSSProperties["columnGap"],
    rowGap?: CSSProperties["rowGap"],
    style?: CSSProperties
};

export interface GridLayoutItemProps {
    column?: number,
    columnSpan?: number,
    row?: number,
    rowSpan?: number,
    priority?: number,
    style?: CSSProperties
};

export class GridLayout extends Component<GridLayoutProps> {
    static defaultProps: GridLayoutProps = {
        columns: 1,
        rows: NaN,
        columnGap: 0,
        rowGap: 0
    }

    render() {
        let childrensSortedByPriority = Children.toArray(this.props.children).sort((firstElement: any, secondElement: any) => {
            return (firstElement.props.priority - secondElement.props.priority) || 1;
        });
        return <div className="GridLayout" style={{
            ...this.props.style,
            display: 'grid',
            gridTemplateColumns: this.props.columns ? `repeat(${this.props.columns}, 1fr)` : 'auto',
            gridTemplateRows: this.props.rows ? `repeat(${this.props.rows}, 1fr)` : 'auto',
            columnGap: this.props.columnGap,
            rowGap: this.props.rowGap,
        }}>{childrensSortedByPriority}</div>
    }
}

export class GridLayoutItem extends Component<GridLayoutItemProps> {
    static defaultProps: GridLayoutItemProps = {
        column: 1,
        columnSpan: 0,
        row: NaN,
        rowSpan: 0,
        priority: NaN
    }

    render() {
        return <div className="GridLayoutItem" style={{
            ...this.props.style,
            gridColumn: this.props.column ? `${this.props.column}/${this.props.column! + this.props.columnSpan!}` : 'auto',
            gridRow: this.props.row ? `${this.props.row}/${this.props.row! + this.props.rowSpan!}` : 'auto'
        }}>{this.props.children}</div>
    }
}