// Main components
export { AppSidebar } from "./components/AppSidebar";
export { UserInfo } from "./components/UserInfo";
export { LogoutButton } from "./components/LogoutButton";

// UI Primitives
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./components/ui/sidebar";

export { Button, buttonVariants } from "./components/ui/button";
export { Input } from "./components/ui/input";
export { Separator } from "./components/ui/separator";
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/ui/sheet";
export { Skeleton } from "./components/ui/skeleton";
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip";
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "./components/ui/avatar";

// Hooks
export { useIsMobile } from "./hooks/use-mobile";

// Utilities
export { cn } from "./lib/utils";

// Types
export type {
  NavigationItem,
  NavigationGroup,
  LogoConfig,
  UserData,
  AppSidebarProps,
  UserInfoProps,
  LogoutButtonProps,
} from "./types";
