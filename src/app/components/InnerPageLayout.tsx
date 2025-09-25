"use client";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";

interface InnerPageLayoutProps {
  children: React.ReactNode;
  section?: string;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
  }>;
  showSidebar?: boolean;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
  children,
  section,
  breadcrumbItems,
  showSidebar = true
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb customItems={breadcrumbItems} />
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-3 py-4">
        <div className={`grid ${showSidebar ? 'grid-cols-1 lg:grid-cols-4' : 'grid-cols-1'} gap-8`}>
          
          {/* Sidebar */}
          {showSidebar && (
            <div className="lg:col-span-1 order-2 lg:order-1 mr-2">
              <div className="sticky top-4">
                <Sidebar section={section} />
              </div>
            </div>
          )}
          
          {/* Main Content */}
          <div className={`${showSidebar ? 'lg:col-span-3' : 'col-span-1'} order-1 lg:order-2 ml-3`}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {children}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default InnerPageLayout;