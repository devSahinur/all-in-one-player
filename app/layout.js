import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All In One Player",
  description: "Test your MP4, YouTube, SoundCloud, Facebook, Vimeo, Mux, Twitch, Streamable, Wistia, DailyMotion, Mixcloud, Vidyard, Kaltura, M3U8 & MPD URLs with our fast player ⚡",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
