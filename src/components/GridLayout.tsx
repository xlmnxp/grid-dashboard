import React, { Component, CSSProperties, Children } from 'react';
import './GridLayout.css';

export interface GridLayoutProps {
    columns?: number,
    gap?: CSSProperties["gap"],
    style?: CSSProperties
};

export interface GridLayoutItemProps {
    column?: number,
    columnSpan?: number,
    priority?: number,
    style?: CSSProperties
};

export class GridLayout extends Component<GridLayoutProps> {
    static defaultProps: GridLayoutProps = {
        columns: 1,
        gap: 0
    }

    render() {
        let childrensSortedByPriority = Children.toArray(this.props.children).sort((firstElement: any, secondElement: any) => {
            return (firstElement.props.priority - secondElement.props.priority) || 1;
        });
        return <div style={{
            ...this.props.style,
            display: 'grid',
            gridTemplateColumns: `repeat(${this.props.columns}, 1fr)`,
            columnGap: this.props.gap
        }}>{childrensSortedByPriority}</div>
    }
}

export class GridLayoutItem extends Component<GridLayoutItemProps> {
    static defaultProps: GridLayoutItemProps = {
        column: 1,
        priority: NaN,
        columnSpan: 0
    }

    render() {
        return <div style={{
            ...this.props.style,
            gridColumn: `${this.props.column}/${this.props.column! + this.props.columnSpan!}`
        }}>{this.props.children}</div>
    }
}