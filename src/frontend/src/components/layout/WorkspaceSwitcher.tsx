import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useWorkspaceStore } from "@/stores/workspaceStore";
import { Building2, Check, ChevronsUpDown, Plus } from "lucide-react";
import { useState } from "react";

export default function WorkspaceSwitcher() {
  const {
    workspaces,
    currentWorkspaceId,
    setCurrentWorkspace,
    createWorkspace,
  } = useWorkspaceStore();
  const current = workspaces.find((w) => w.id === currentWorkspaceId);
  const [createOpen, setCreateOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const handleCreate = () => {
    if (!newName.trim()) return;
    createWorkspace(newName.trim());
    setNewName("");
    setCreateOpen(false);
  };

  const initial = current?.name.charAt(0).toUpperCase() ?? "?";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "flex items-center gap-2.5 w-full px-2 py-1.5 rounded-md",
              "hover:bg-sidebar-accent/70 transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sidebar-ring",
              "group",
            )}
            data-ocid="workspace-switcher-btn"
          >
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-primary-foreground font-bold text-xs select-none">
                {initial}
              </span>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs font-semibold text-sidebar-foreground truncate leading-tight">
                {current?.name ?? "Select workspace"}
              </p>
              <p className="text-[10px] text-muted-foreground capitalize leading-tight mt-px">
                {current?.plan ?? ""} plan
              </p>
            </div>
            <ChevronsUpDown
              size={12}
              className="text-muted-foreground/60 flex-shrink-0 transition-colors group-hover:text-muted-foreground"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          align="start"
          className="w-56 shadow-lg animate-fade-in"
          data-ocid="workspace-dropdown"
        >
          <DropdownMenuLabel className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider py-2 px-2">
            Workspaces
          </DropdownMenuLabel>
          {workspaces.map((ws) => (
            <DropdownMenuItem
              key={ws.id}
              onClick={() => setCurrentWorkspace(ws.id)}
              className={cn(
                "gap-2.5 cursor-pointer px-2 py-2 rounded-md",
                ws.id === currentWorkspaceId && "bg-primary/8",
              )}
              data-ocid={`workspace-item-${ws.id}`}
            >
              <div className="w-6 h-6 rounded bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-[10px] font-bold select-none">
                  {ws.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium truncate block leading-tight">
                  {ws.name}
                </span>
                <span className="text-[10px] text-muted-foreground capitalize leading-tight">
                  {ws.plan}
                </span>
              </div>
              {ws.id === currentWorkspaceId && (
                <Check size={13} className="text-primary flex-shrink-0" />
              )}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="gap-2.5 cursor-pointer px-2 py-2 rounded-md"
            onClick={() => setCreateOpen(true)}
            data-ocid="create-workspace-btn"
          >
            <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0">
              <Plus size={11} className="text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              Create workspace
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Create Workspace Dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent
          className="sm:max-w-md shadow-lg"
          data-ocid="create-workspace-dialog"
        >
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building2 size={16} className="text-primary" />
              </div>
              <DialogTitle>Create workspace</DialogTitle>
            </div>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-1.5">
              <Label htmlFor="workspace-name" className="text-sm font-medium">
                Workspace name
              </Label>
              <Input
                id="workspace-name"
                placeholder="e.g. Acme Corp"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCreate()}
                autoFocus
                data-ocid="workspace-name-input"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreate}
              disabled={!newName.trim()}
              data-ocid="create-workspace-submit"
            >
              Create workspace
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
