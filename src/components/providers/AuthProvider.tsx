// AuthContext.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { setAuthToken } from "@/libs/axios";

const AuthContext = createContext<{ token: string | null } | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getToken();
      setToken(fetchedToken);
      setAuthToken(fetchedToken);
    };
    fetchToken();
  }, [getToken]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
