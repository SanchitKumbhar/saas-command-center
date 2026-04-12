import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside
          className={`
            relative flex-shrink-0 h-full
            border-r border-sidebar-border bg-sidebar
            transition-[width] duration-300 ease-in-out
            ${sidebarCollapsed ? "w-[60px]" : "w-[240px]"}
          `}
          data-ocid="sidebar"
        >
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((v) => !v)}
          />
        </aside>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent
            side="left"
            className="p-0 w-72 sm:w-80 bg-sidebar border-r border-sidebar-border shadow-lg"
          >
            <Sidebar
              collapsed={false}
              onToggleCollapse={() => setMobileOpen(false)}
            />
          </SheetContent>
        </Sheet>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar
          onMobileMenuClick={() => setMobileOpen(true)}
          showMobileMenu={isMobile}
        />
        <main
          className="flex-1 overflow-y-auto scrollbar-thin bg-background"
          data-ocid="main-content"
        >
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 max-w-screen-2xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
