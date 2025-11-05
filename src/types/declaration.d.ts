declare module "next-auth" {}

declare module "next-auth/jwt" {}

declare module "next" {}

declare module "next/image" {
  import * as React from "react";
  
  interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width: number;
    height: number;
  }

  const Image: React.FC<ImageProps>;
  export default Image;
}
declare module "next/navigation" {
  export function usePathname(): string;
}
declare module "next/link" {
  import * as React from "react";
  import { UrlObject } from "url";

  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string | UrlObject;
    as?: string | UrlObject;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    children: React.ReactNode;
  }

  const Link: React.FC<LinkProps>;
  export default Link;
}
