import * as React from 'react';
import { tuple } from '../_util/type';

const ButtonTypes = tuple('default', 'primary')
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('default', 'circle')
export type ButtonShape = typeof ButtonShapes[number]
const ButtonHTMLTypes = tuple('submit', 'button')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape
}

// 定义锚点类型的props
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = () => {
  return (
    <a>button</a>
  )
}

export default InternalButton;

