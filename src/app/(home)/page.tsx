import { PhoneForm } from "@/components/organisms/phone-form";
import "./style.css";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-blue-white w-screen min-h-screen">
      <PhoneForm />
    </main>
  );
}
