import { permanentRedirect } from "next/navigation";

export default function RootPage() {
  // 308, not 307. A temporary redirect tells Google the source URL is still
  // the canonical one, which is why Search Console kept picking
  // https://riverlabs-ai.com/ over the canonical we declare on /pt.
  //
  // Safe because this redirect is unconditional. If locale detection is ever
  // added here, this must go back to a temporary redirect — browsers cache
  // 308 indefinitely and would pin every visitor to /pt.
  permanentRedirect("/pt");
}
