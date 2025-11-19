"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { UserInfo } from "./UserInfo";
import { LogoutButton } from "./LogoutButton";
import { AppSidebarProps } from "../types";

export function AppSidebar({
  logo = {
    full: "/logo.svg",
    icon: "/logo-icon.svg",
    alt: "Logo",
    width: 179,
    height: 32,
  },
  navigation,
  user,
  UserComponent,
  onLogout,
  LogoutComponent,
  shouldRender = true,
  className,
  variant = "inset",
}: AppSidebarProps) {
  const { open } = useSidebar();

  // Check if sidebar should render
  const canRender = typeof shouldRender === "function" ? shouldRender() : shouldRender;

  if (!canRender) {
    return null;
  }

  return (
    <Sidebar variant={variant} className={`border-r m-0 bg-white ${className || ""}`}>
      <SidebarHeader className="items-center justify-center py-4 bg-white">
        <Link href="https://platform.mybackhub.com" passHref>
          <div className="flex justify-center items-center">
            {open ? (
              <Image
                src={logo.full}
                alt={logo.alt || "Logo"}
                width={logo.width || 179}
                height={logo.height || 32}
              />
            ) : (
              <Image
                src={logo.icon}
                alt={logo.alt || "Logo"}
                width={24}
                height={24}
              />
            )}
          </div>
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="bg-white">
        {/* Main Navigation Group */}
        {navigation.mainGroup && (
          <SidebarGroup>
            <SidebarGroupLabel>{navigation.mainGroup.label}</SidebarGroupLabel>
            <SidebarGroupContent className="p-o m-0">
              <SidebarMenu>
                {navigation.mainGroup.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      onClick={item.onClick}
                      isActive={item.isActive}
                      className="data-[active=true]:bg-primary! data-[active=true]:text-white!"
                    >
                      <Link href={item.url} passHref>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Additional Navigation Groups */}
        {navigation.additionalGroups?.map((group, index) => (
          <SidebarGroup key={group.label} className={index === 0 ? "mt-6" : ""}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className="data-[active=true]:bg-color-blue-600!"
                    >
                      <a href={item.url} target="_self" rel="noopener noreferrer">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <div className="w-full flex items-start justify-start px-2">
          {UserComponent && user ? (
            <UserComponent user={user} />
          ) : user ? (
            <UserInfo user={user} />
          ) : null}
        </div>
        <Separator className="my-2" />
        <div className="px-16 mb-4">
          <SidebarMenuButton
            asChild
            className="flex items-center justify-center"
          >
            {LogoutComponent ? (
              <LogoutComponent />
            ) : (
              <LogoutButton onLogout={onLogout} />
            )}
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
