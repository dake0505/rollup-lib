import * as React from 'react';
import { tuple } from '../_util/type';
import type { SizeType } from '../SizeContext';

function insertSpace (child: React.ReactChild, needInserted?: boolean) {
  return child
}

function spaceChildren (children: React.ReactNode, needInserted: boolean) {
  let isPrevChildPure = false;
  const childList: React.ReactNode[] = []
  React.Children.forEach(children, child => {
    const type = typeof child
    const isCurrentChildPure = type === 'string' || type === 'number'
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex]
      childList[lastIndex] = `${lastChild}${child}`
    } else {
      childList.push(child)
    }
    isPrevChildPure = isCurrentChildPure
  })

  return React.Children.map(childList, child => insertSpace(child as React.ReactChild, needInserted))
}

const ButtonTypes = tuple('default', 'primary')
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('default', 'circle')
export type ButtonShape = typeof ButtonShapes[number]
const ButtonHTMLTypes = tuple('submit', 'button')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode
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

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    loading = false,
    type = 'default',
    danger,
    shape = 'default',
    children
  } = props
  const kids =
    children || children === 0
    ? spaceChildren(children, false)
    : null
 
  const buttonNode = (
    <button>{kids}</button>
  )
  return (
    <div>
      {buttonNode}
    </div>
  )
}

export default InternalButton;

