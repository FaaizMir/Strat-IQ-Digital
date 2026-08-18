import ServiceTemplate from "@/components/services/ServiceTemplate";
import { servicesContent } from "@/data/servicesContent";

const content = servicesContent["meta-instagram-ads-services"];

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function MetaInstagramAdsServicesPage() {
  return <ServiceTemplate content={content} />;
}
