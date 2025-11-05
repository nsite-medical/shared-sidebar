/**
 * Custom Components Example
 *
 * This example shows how to customize the UserInfo and LogoutButton
 * components with your own implementations.
 */

"use client";

import {
  AppSidebar,
  SidebarProvider,
  SidebarInset,
  UserInfoProps,
} from "@mybackhub/shared-sidebar";
import { HomeIcon, SettingsIcon } from "lucide-react";

// Custom UserInfo component
function CustomUserInfo({ user }: { user: UserInfoProps["user"] }) {
  return (
    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
        {user.firstName?.[0]}
      </div>
      <div>
        <p className="font-semibold text-sm">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-xs text-gray-500">{user.email}</p>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
          Premium
        </span>
      </div>
    </div>
  );
}

// Custom Logout Button component
function CustomLogoutButton() {
  const handleLogout = async () => {
    // Your custom logout logic
    console.log("Custom logout");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
    >
      Sign Out
    </button>
  );
}

export function CustomComponentsExample() {
  return (
    <SidebarProvider>
      <AppSidebar
        logo={{
          full: "/logo.svg",
          icon: "/logo-icon.svg",
          alt: "My App",
        }}
        navigation={{
          mainGroup: {
            label: "Navigation",
            items: [
              { title: "Home", url: "/", icon: HomeIcon },
              { title: "Settings", url: "/settings", icon: SettingsIcon },
            ],
          },
        }}
        user={{
          firstName: "Jane",
          lastName: "Smith",
          email: "jane@example.com",
        }}
        // Use custom components
        UserComponent={CustomUserInfo}
        LogoutComponent={CustomLogoutButton}
      />
      <SidebarInset>
        <main>
          <h1>Custom Components Example</h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
