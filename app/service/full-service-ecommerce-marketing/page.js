import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["full-service-ecommerce-marketing"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function FullServiceEcommerceMarketingPage() {
  return <ServiceTemplate content={content} />;
}
