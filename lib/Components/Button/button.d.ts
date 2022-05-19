import * as React from 'react';
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
