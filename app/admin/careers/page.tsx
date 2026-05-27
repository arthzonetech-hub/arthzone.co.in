import type { Metadata } from "next";
import CareersAdminDashboard from "@/components/careers/careers-admin-dashboard";

export const metadata: Metadata = {
  title: "Careers Admin | Arthzone",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CareersAdminPage() {
  return <CareersAdminDashboard />;
}
