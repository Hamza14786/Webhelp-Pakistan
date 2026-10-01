import Bot from "lucide-react/dist/esm/icons/bot";
import Building2 from "lucide-react/dist/esm/icons/building-2";
import Boxes from "lucide-react/dist/esm/icons/boxes";
import CarFront from "lucide-react/dist/esm/icons/car-front";
import Fuel from "lucide-react/dist/esm/icons/fuel";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import Headset from "lucide-react/dist/esm/icons/headset";
import HeartPulse from "lucide-react/dist/esm/icons/heart-pulse";
import Server from "lucide-react/dist/esm/icons/server";
import ShoppingBag from "lucide-react/dist/esm/icons/shopping-bag";
import Store from "lucide-react/dist/esm/icons/store";
import Stethoscope from "lucide-react/dist/esm/icons/stethoscope";
import UtensilsCrossed from "lucide-react/dist/esm/icons/utensils-crossed";
import Warehouse from "lucide-react/dist/esm/icons/warehouse";
import Workflow from "lucide-react/dist/esm/icons/workflow";

import { FloatingCardsAnimation, type FloatingCardItem } from "@/components/services/ServicesHeroAnimation";
import { products } from "@/lib/site";

const productIcons: Record<string, FloatingCardItem["Icon"]> = {
  "business-vps-hosting": Server,
  "custom-erp": ShoppingBag,
  "fuel-station-automation": Fuel,
  "school-management-system": GraduationCap,
  "hospital-management-system": HeartPulse,
  "office-management-system": Building2,
  "restaurant-management-system": UtensilsCrossed,
  "business-automation-erp": Workflow,
  "inventory-warehouse-management": Warehouse,
  "pos-retail-management": Store,
  "real-estate-management": Building2,
  "clinic-management": Stethoscope,
  "vehicle-dealership-management": CarFront,
  "customer-support-ticketing": Headset,
  "ai-chatbot-call-centers": Bot,
};

const productCards: FloatingCardItem[] = products.map((product) => ({
  title: product.name,
  category: product.category.toUpperCase(),
  Icon: productIcons[product.slug] ?? Boxes,
}));

export function ProductHeroAnimation() {
  return <FloatingCardsAnimation items={productCards} />;
}
