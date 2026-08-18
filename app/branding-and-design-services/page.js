import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["branding-and-design-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function BrandingAndDesignServicesPage() {
  return <ServiceTemplate content={content} />;
}
