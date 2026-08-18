import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["conversion-optimization-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ConversionOptimizationServicesPage() {
  return <ServiceTemplate content={content} />;
}
