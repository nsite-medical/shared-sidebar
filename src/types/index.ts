import * as React from "react";

// Navigation types
export interface NavigationItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive?: boolean;
}

export interface NavigationGroup {
  label: string;
  items: NavigationItem[];
}

// Logo configuration
export interface LogoConfig {
  full: string;      // Path to full logo
  icon: string;      // Path to icon logo
  alt?: string;      // Alt text
  width?: number;    // Width in pixels
  height?: number;   // Height in pixels
}

// User data
export interface UserData {
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
  name?: string;
  image?: string;
}

// AppSidebar Props
export interface AppSidebarProps {
  // Branding
  logo?: LogoConfig;

  // Navigation
  navigation: {
    mainGroup?: NavigationGroup;
    additionalGroups?: NavigationGroup[];
  };

  // User & Auth
  user?: UserData;
  UserComponent?: React.ComponentType<{ user: UserData }>;

  // Actions
  onLogout?: () => void | Promise<void>;
  LogoutComponent?: React.ComponentType;

  // Visibility Control
  shouldRender?: boolean | (() => boolean);

  // Styling
  className?: string;
  variant?: "default" | "inset" | "floating";
}

// UserInfo Props
export interface UserInfoProps {
  user: UserData;
  CustomAvatar?: React.ComponentType<{ user: UserData }>;
  className?: string;
}

// LogoutButton Props
export interface LogoutButtonProps {
  onLogout?: () => void | Promise<void>;
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
  className?: string;
}
