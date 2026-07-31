import {
  CalendarDays,
  LayoutDashboard,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";
import { NavLink, Outlet } from "react-router";

import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Visão geral",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Agenda",
    path: "/agenda",
    icon: CalendarDays,
  },
  {
    label: "Pacientes",
    path: "/pacientes",
    icon: Users,
  },
];

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-muted/40">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r bg-background md:flex">
        <div className="flex h-16 items-center gap-3 border-b px-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Stethoscope className="size-5" />
          </div>

          <div>
            <p className="font-semibold">Clínica Particular</p>
            <p className="text-xs text-muted-foreground">
              Gestão médica
            </p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )
                }
              >
                <Icon className="size-4" />

                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t p-3">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Settings className="size-4" />
            Configurações
          </button>
        </div>
      </aside>

      <div className="md:pl-64">
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
          <div>
            <p className="text-sm font-medium">Painel médico</p>
            <p className="text-xs text-muted-foreground">
              Quinta-feira, 10 de julho
            </p>
          </div>

          <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            DR
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}