import * as React from 'react';
import classNames from 'classnames'
import { tuple } from '../_util/type';
import SizeContext from '../SizeContext';
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
    children,
    htmlType = 'button' as ButtonProps['htmlType'],
    ...rest
  } = props
  const size = React.useContext(SizeContext)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClick } = props;
    (onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e)
  }
  const sizeFullName = size
  const sizeCls = sizeFullName
  const classes = classNames(
    {
      [`${shape}`]: shape !== 'default' && shape,
      [`${type}`]: type,
      [`${sizeCls}`]: sizeCls,
      ['dangerous']: !!danger
    }
  )
  const kids =
    children || children === 0
    ? spaceChildren(children, false)
    : null
 
  const buttonNode = (
    <button
      {...(rest as NativeButtonProps)}
      className={classes}
      type={htmlType}
      onClick={handleClick}
    >
      {kids}
    </button>
  )
  return (
    <div>
      {buttonNode}
    </div>
  )
}

export default InternalButton;

