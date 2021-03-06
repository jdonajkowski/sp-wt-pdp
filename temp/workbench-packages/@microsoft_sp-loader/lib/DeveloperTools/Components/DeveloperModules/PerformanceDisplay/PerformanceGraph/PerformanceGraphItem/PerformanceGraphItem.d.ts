/// <reference types="react" />
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file PerformanceGraphItem.tsx
 * Sub-component for PerformanceGraph. One of these exists for each bar in the graph.
 * Each bar has a start value and a width corresponding to some performance data.
 */
import * as React from 'react';
import { IPerfItem } from '../../../../../DataProviders/PerformanceDisplayStateProvider';
export interface IPerformanceGraphItemProps {
    /**
     * Performance data point to be represented by this graph item
     */
    perfItem: IPerfItem;
    /**
     * Integer time in milliseconds that the page started loading
     */
    startTime: number;
    /**
     * Integer time in milliseconds showing how long the page took to load overall. Used for calculations
     */
    overallDuration: number;
}
export default class PerformanceGraphItem extends React.Component<IPerformanceGraphItemProps, {}> {
    constructor(props: IPerformanceGraphItemProps);
    render(): React.ReactElement<IPerformanceGraphItemProps>;
    /**
     * Creates a div to show the bar on the graph.
     * startVal: start time integer representing where the bar starts
     * duration: time duration integer representing width of the bar
     * barColor: class name specifying the color of the bar
     */
    private _drawGraphBar(startVal, duration, barColor, tooltip);
}
