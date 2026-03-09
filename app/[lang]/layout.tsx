export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "pt" }];
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
