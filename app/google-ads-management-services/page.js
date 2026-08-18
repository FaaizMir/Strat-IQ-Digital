import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["google-ads-management-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function GoogleAdsManagementServicesPage() {
  return <ServiceTemplate content={content} />;
}
