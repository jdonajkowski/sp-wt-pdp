/// <reference types="react" />
import * as React from 'react';
import { IWtPdpProps } from './IWtPdpProps';
export default class WtPdp extends React.Component<IWtPdpProps, {}> {
    /**
     *
     */
    handleClick: (e: any, {title}: {
        title: any;
    }) => void;
    HandleNextClick: (e: any) => void;
    state: {
        active: string;
        Next: string;
        User: string;
        Manager: string;
    };
    constructor(props: any);
    render(): React.ReactElement<IWtPdpProps>;
}
