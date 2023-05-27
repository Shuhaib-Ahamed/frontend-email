// Components.
import AuthContext from "@/context/AuthContext";
import RqProvider from "./RqProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext>
      <RqProvider>{children}</RqProvider>
    </AuthContext>
  );
}
