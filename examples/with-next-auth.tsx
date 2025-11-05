/**
 * NextAuth Integration Example
 *
 * This example shows how to integrate the sidebar with NextAuth.js
 * for authentication and session management.
 */

"use client";

import { AppSidebar, SidebarProvider, SidebarInset } from "@mybackhub/shared-sidebar";
import { useSession, signOut } from "next-auth/react";
import { BookUser, Users, FileText, LayoutGrid, ShoppingCart } from "lucide-react";

export function NextAuthSidebarExample() {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    // Remove any local storage items
    localStorage.removeItem("accessToken");

    // Sign out from NextAuth
    await signOut({ redirect: false });

    // Redirect to SSO logout or custom logout page
    const isDev = process.env.NODE_ENV === "development";
    const ssoLogoutUrl = isDev
      ? "https://staging-sso.mybackhub.com/auth/logout"
      : "https://sso.mybackhub.com/auth/logout";

    window.location.href = ssoLogoutUrl;
  };

  // Don't render sidebar if not authenticated
  if (status !== "authenticated") {
    return null;
  }

  return (
    <SidebarProvider>
      <AppSidebar
        logo={{
          full: "/mbh-logo.svg",
          icon: "/mbh-logo-icon.png",
          alt: "MyBackHub",
          width: 179,
          height: 32,
        }}
        navigation={{
          mainGroup: {
            label: "Dashboard",
            items: [
              { title: "My Dashboard", url: "/", icon: LayoutGrid },
              { title: "My Reports", url: "/reports", icon: FileText },
              { title: "Marketplace", url: "/marketplace", icon: ShoppingCart },
            ],
          },
          additionalGroups: [
            {
              label: "More Apps",
              items: [
                {
                  title: "Manage Account",
                  url: "https://account.mybackhub.com/",
                  icon: BookUser,
                },
                {
                  title: "Community",
                  url: "https://community.mybackhub.com/",
                  icon: Users,
                },
              ],
            },
          ],
        }}
        user={{
          firstName: session.user?.name?.split(" ")[0],
          lastName: session.user?.name?.split(" ")[1],
          email: session.user?.email || "",
        }}
        onLogout={handleLogout}
        shouldRender={status === "authenticated"}
      />
      <SidebarInset>
        {/* Your authenticated content */}
        <main className="p-4">
          <h1>Dashboard</h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
