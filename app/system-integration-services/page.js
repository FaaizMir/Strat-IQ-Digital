import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["system-integration-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function SystemIntegrationServicesPage() {
  return <ServiceTemplate content={content} />;
}
