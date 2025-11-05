"use client";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { UserInfoProps } from "../types";

export function UserInfo({ user, CustomAvatar, className }: UserInfoProps) {
  const AvatarComponent = CustomAvatar || Avatar;

  // Handle both firstName/lastName and name formats
  const displayName = user.firstName && user.lastName
    ? `${user.firstName} ${user.lastName}`
    : user.name || "";

  const avatarInitial = user.firstName?.[0] || user.name?.[0] || "?";

  return (
    <div className={`flex items-start space-x-2 ${className || ""}`}>
      {CustomAvatar ? (
        <CustomAvatar user={user} />
      ) : (
        <Avatar className="w-10 h-10">
          <AvatarFallback className="font-semibold">
            {avatarInitial}
          </AvatarFallback>
        </Avatar>
      )}
      <div>
        <p className="font-normal">{displayName}</p>
        <p className="text-muted-foreground text-xs">
          {user.email || ""}
        </p>
      </div>
    </div>
  );
}
