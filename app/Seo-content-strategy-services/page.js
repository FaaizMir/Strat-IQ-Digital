import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["Seo-content-strategy-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function SeoContentStrategyServicesPage() {
  return <ServiceTemplate content={content} />;
}
