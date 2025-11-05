/**
 * Basic Usage Example
 *
 * This example shows the simplest way to use the AppSidebar component
 * with minimal configuration.
 */

import { AppSidebar, SidebarProvider, SidebarInset } from "@mybackhub/shared-sidebar";
import { HomeIcon, SettingsIcon, UsersIcon } from "lucide-react";

export function BasicSidebarExample() {
  return (
    <SidebarProvider>
      <AppSidebar
        logo={{
          full: "/logo.svg",
          icon: "/logo-icon.svg",
          alt: "My App",
          width: 179,
          height: 32,
        }}
        navigation={{
          mainGroup: {
            label: "Menu",
            items: [
              { title: "Home", url: "/", icon: HomeIcon },
              { title: "Users", url: "/users", icon: UsersIcon },
              { title: "Settings", url: "/settings", icon: SettingsIcon },
            ],
          },
        }}
        user={{
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
        }}
        onLogout={async () => {
          console.log("Logout clicked");
          // Handle logout logic
        }}
      />
      <SidebarInset>
        {/* Your page content goes here */}
        <main>
          <h1>Welcome to My App</h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
