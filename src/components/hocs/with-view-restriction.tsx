"use client";

import React, { ComponentType } from "react";
import { useUser } from "@clerk/nextjs";

type WithViewRestrictionsProps = {
  //...
};

export function withViewRestrictions<P extends object>(
  Component: ComponentType<P>
) {
  const ComponentWithProvider: React.FC<P & WithViewRestrictionsProps> = (
    props
  ) => {
    const { user } = useUser();
    const isSeller = user?.publicMetadata?.role === "seller";

    return user ? (
      isSeller ? (
        <Component {...props} />
      ) : (
        <div>You don&apos;t have permission to access this page</div>
      )
    ) : null;
  };

  return ComponentWithProvider;
}
