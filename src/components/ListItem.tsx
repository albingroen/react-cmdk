import Icon, { IconProps } from "./Icon";
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  Fragment,
  ReactNode,
  useContext,
} from "react";
import { IconName, RenderLink } from "../types";
import { RenderLinkContext, SelectContext } from "../lib/context";
import { classNames } from "../lib/utils";

export type ListItemType = "Link" | "Action";

function getListItemWrapperStyles(selected: boolean, disabled?: boolean) {
  return classNames(
    "command-palette-list-item block w-full text-left px-3.5 py-2.5 rounded-md hover:bg-gray-100 focus:ring-1 focus:ring-gray-300 focus:outline-none flex items-center space-x-2.5 justify-between",
    selected && !disabled ? "bg-gray-200/50" : "bg-transparent",
    disabled
      ? "cursor-default pointer-events-none opacity-50"
      : "cursor-pointer"
  );
}

interface ListItemBaseProps {
  icon?: FC | IconName;
  showType?: boolean;
  disabled?: boolean;
  index: number;
}

export interface LinkProps
  extends ListItemBaseProps,
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > {
  renderLink?: RenderLink;
  index: number;
}

export function Link({
  renderLink: localRenderLink,
  disabled = false,
  showType = true,
  className,
  children,
  index,
  icon,
  ...rest
}: LinkProps) {
  const { selected } = useContext(SelectContext);
  const { renderLink: globalRenderLink } = useContext(RenderLinkContext);

  const renderLink = localRenderLink || globalRenderLink;

  function renderLinkContent() {
    return (
      <ListItemContent type={showType ? "Link" : undefined} icon={icon}>
        {children}
      </ListItemContent>
    );
  }

  const styles = classNames(
    getListItemWrapperStyles(selected === index, disabled),
    className
  );

  return renderLink ? (
    <Fragment>
      {renderLink({
        ...rest,
        children: renderLinkContent(),
        "aria-disabled": disabled,
        className: styles,
      })}
    </Fragment>
  ) : (
    <a {...rest} aria-disabled={disabled} className={styles}>
      {renderLinkContent()}
    </a>
  );
}

export interface ButtonProps
  extends ListItemBaseProps,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  index: number;
}

export function Button({
  showType = true,
  className,
  children,
  index,
  icon,
  ...rest
}: ButtonProps) {
  const { selected } = useContext(SelectContext);

  return (
    <button
      {...rest}
      aria-disabled={rest.disabled ?? false}
      className={classNames(
        getListItemWrapperStyles(selected === index, rest.disabled),
        className
      )}
    >
      <ListItemContent type={showType ? "Action" : undefined} icon={icon}>
        {children}
      </ListItemContent>
    </button>
  );
}

interface ListItemContentProps {
  icon?: FC<any> | IconName;
  children: ReactNode;
  type?: ListItemType;
}

function ListItemContent({
  icon: ListItemIcon,
  children,
  type,
}: ListItemContentProps) {
  return (
    <>
      <div className="flex w-full items-center space-x-2.5">
        {ListItemIcon &&
          (typeof ListItemIcon === "string" ? (
            <Icon name={ListItemIcon as IconName} />
          ) : (
            <ListItemIcon className="w-5 h-5 text-gray-500" />
          ))}

        {typeof children === "string" ? (
          <span className="truncate max-w-md">{children}</span>
        ) : (
          children
        )}
      </div>

      {type && <span className="text-gray-500 text-sm">{type}</span>}
    </>
  );
}

export default function ListItem(props: ButtonProps & LinkProps) {
  const Wrapper = props.href ? Link : Button;

  return <Wrapper {...props} />;
}
