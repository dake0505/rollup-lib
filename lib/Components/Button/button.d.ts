import * as React from 'react';
import type { SizeType } from '../SizeContext';
declare const ButtonTypes: ["default", "primary"];
export declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: ["default", "circle"];
export declare type ButtonShape = typeof ButtonShapes[number];
declare const ButtonHTMLTypes: ["submit", "button"];
export declare type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export interface BaseButtonProps {
    type?: ButtonType;
    icon?: React.ReactNode;
    shape?: ButtonShape;
    size?: SizeType;
    loading?: boolean | {
        delay?: number;
    };
    className?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    children?: React.ReactNode;
}
export declare type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps;
export declare type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps;
export declare type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
declare const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps>;
export default InternalButton;
