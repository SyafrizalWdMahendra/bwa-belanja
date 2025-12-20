"use client";

import * as React from "react";
import {
  Archive,
  AudioWaveform,
  Box,
  Building,
  Command,
  Frame,
  GalleryVerticalEnd,
  HomeIcon,
  Map,
  MapPin,
  PieChart,
  Settings2,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { IconTrolley } from "@tabler/icons-react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bwa Belanja",
      logo: ShoppingBag,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: Archive,
    },
    {
      title: "Locations",
      url: "/dashboard/locations",
      icon: MapPin,
    },
    {
      title: "Brands",
      url: "/dashboard/brands",
      icon: Building,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: Box,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: IconTrolley,
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: Users,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
