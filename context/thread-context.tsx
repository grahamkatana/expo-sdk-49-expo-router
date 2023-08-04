import { useContext, createContext, useState, useEffect } from "react";
import { generateThreads } from "@/utils/generate-dummy-data";
import { Thread } from "@/types/threads";

export const ThreadsContext = createContext<Thread[]>([]);

export const ThreadProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = useState<Thread[]>([]);
  useEffect(() => {
    setThreads(generateThreads());
  }, []);
  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
};
