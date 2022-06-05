import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { ButtonProps, LinkProps } from "./components/ListItem";
export type { ButtonProps, LinkProps } from "./components/ListItem";

export type IconName =
  | "XIcon"
  | "BanIcon"
  | "CogIcon"
  | "CreditCardIcon"
  | "CollectionIcon"
  | "EyeIcon"
  | "KeyIcon"
  | "MapIcon"
  | "RssIcon"
  | "SunIcon"
  | "TagIcon"
  | "BellIcon"
  | "CakeIcon"
  | "CashIcon"
  | "ChatIcon"
  | "ChipIcon"
  | "CodeIcon"
  | "CubeIcon"
  | "FilmIcon"
  | "FireIcon"
  | "FlagIcon"
  | "GiftIcon"
  | "HandIcon"
  | "HomeIcon"
  | "LinkIcon"
  | "MailIcon"
  | "MenuIcon"
  | "MoonIcon"
  | "PlayIcon"
  | "PlusIcon"
  | "SearchIcon"
  | "SaveIcon"
  | "StarIcon"
  | "StopIcon"
  | "UserIcon"
  | "WifiIcon"
  | "CheckIcon"
  | "ClockIcon"
  | "CloudIcon"
  | "GlobeIcon"
  | "HeartIcon"
  | "InboxIcon"
  | "LoginIcon"
  | "LogoutIcon"
  | "MinusIcon"
  | "PauseIcon"
  | "PhoneIcon"
  | "ReplyIcon"
  | "ScaleIcon"
  | "ShareIcon"
  | "TableIcon"
  | "TrashIcon"
  | "TruckIcon"
  | "UsersIcon"
  | "BriefcaseIcon"
  | "SupportIcon";

export type JsonStructure = Array<{
  items: Array<JsonStructureItem>;
  heading?: string;
  id: string;
}>;

export type JsonStructureItem = Omit<
  (ButtonProps & LinkProps) & { id: string },
  "index"
>;

export type RenderLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { "data-close-on-select"?: boolean }
) => ReactNode;
