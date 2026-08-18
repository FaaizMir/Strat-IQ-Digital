import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["ui-ux-design-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function UiUxDesignServicesPage() {
  return <ServiceTemplate content={content} />;
}
