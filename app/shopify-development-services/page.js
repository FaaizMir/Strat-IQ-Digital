import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["shopify-development-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ShopifyDevelopmentServicesPage() {
  return <ServiceTemplate content={content} />;
}
