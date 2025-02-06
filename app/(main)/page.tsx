import React from "react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, ShoppingBasket, User } from "lucide-react";
import ProductsTable from "@/components/products/ProductsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";


export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard 
        title="Products" 
        count={100} 
        icon={<ShoppingBasket 
        className="text-slate-500" size={72} />}
        />
        <DashboardCard 
        title="Categories" 
        count={12} 
        icon={<Folder 
        className="text-slate-500" size={72} />}
        />
        <DashboardCard 
        title="User" 
        count={750} 
        icon={<User 
        className="text-slate-500" size={72} />}
        />
        <DashboardCard 
        title="Comments" 
        count={120} 
        icon={<MessageCircle 
        className="text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <ProductsTable title="Latest Products" limit={5} />
    </>
  );
}
