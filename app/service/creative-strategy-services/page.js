import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["creative-strategy-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function CreativeStrategyServicesPage() {
  return <ServiceTemplate content={content} />;
}
