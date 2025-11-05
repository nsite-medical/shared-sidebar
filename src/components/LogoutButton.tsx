import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { LogoutButtonProps } from "../types";

export const LogoutButton = ({
  onLogout,
  icon: Icon = LogOut,
  label = "Logout",
  className
}: LogoutButtonProps) => {
  const handleSignOut = async () => {
    if (onLogout) {
      await onLogout();
    }
  };

  return (
    <Button variant="outline" onClick={handleSignOut} className={className}>
      <Icon />
      <span>{label}</span>
    </Button>
  );
};
