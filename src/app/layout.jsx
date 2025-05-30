import "./globals.css";

export const metadata = {
  title: "Glass Replacement Pros",
  description: "When it comes to auto glass repair and replacement, trust and transparency are essential. With a commitment to transparent pricing and trusted glass experts, customers can feel confident knowing they are getting high-quality service without hidden fees or unexpected costs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
