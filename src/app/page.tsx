import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/main"); // Redireciona para /main/page.tsx
  return null;
}
