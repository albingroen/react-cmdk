import * as HeroIconsOutline from "@heroicons/react/24/outline";
import * as HeroIconsSolid from "@heroicons/react/20/solid";
import React, { SVGProps } from "react";
import { IconName } from "../types";

export type IconType = "outline" | "solid";

export interface IconProps extends SVGProps<SVGSVGElement> {
  type?: IconType;
  name: IconName;
}

export default function Icon({ name, type = "solid", ...rest }: IconProps) {
  const Element = (type === "solid" ? HeroIconsSolid : HeroIconsOutline)[name];

  return <Element {...rest} className="w-5 h-5 text-gray-500" />;
}
