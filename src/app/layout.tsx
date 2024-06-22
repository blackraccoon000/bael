import {Inter} from "next/font/google";
import "./globals.css";
import {METADATA_KEYS} from "@/constants/metadata";
import {getServerSession} from "next-auth/next";
import {NextSessionProvider} from "@/components/NextSessionProvider";
import {authOptions} from "@/libs/authOptions";

const inter = Inter({subsets: ["latin"]});

export const metadata = METADATA_KEYS["INDEX"];

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({children}: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ja">
      <body className={inter.className}>
        <NextSessionProvider session={session}>{children}</NextSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
