import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["amazon-ppc-management-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function AmazonPpcManagementServicesPage() {
  return <ServiceTemplate content={content} />;
}
