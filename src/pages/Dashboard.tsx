import {
  CalendarCheck,
  Clock3,
  UserCheck,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const indicators = [
  {
    title: "Consultas de hoje",
    value: "8",
    description: "2 aguardando atendimento",
    icon: CalendarCheck,
  },
  {
    title: "Próxima consulta",
    value: "14:30",
    description: "Paciente demonstrativo",
    icon: Clock3,
  },
  {
    title: "Confirmadas",
    value: "6",
    description: "75% das consultas",
    icon: UserCheck,
  },
  {
    title: "Total de pacientes",
    value: "128",
    description: "4 novos neste mês",
    icon: Users,
  },
];

export function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Visão geral
        </h1>

        <p className="text-sm text-muted-foreground">
          Acompanhe a rotina da clínica e os atendimentos de hoje.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {indicators.map((indicator) => {
          const Icon = indicator.icon;

          return (
            <Card key={indicator.title}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  {indicator.title}
                </CardTitle>

                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>

              <CardContent>
                <p className="text-3xl font-semibold">
                  {indicator.value}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {indicator.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}