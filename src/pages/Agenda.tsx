import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Agenda() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Agenda
          </h1>

          <p className="text-sm text-muted-foreground">
            Organize consultas, retornos e encaixes.
          </p>
        </div>

        <Button>
          <CalendarDays className="size-4" />
          Novo agendamento
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Agenda médica</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex min-h-72 items-center justify-center rounded-lg border border-dashed">
            <div className="text-center">
              <CalendarDays className="mx-auto mb-3 size-8 text-muted-foreground" />

              <p className="font-medium">
                Calendário em construção
              </p>

              <p className="text-sm text-muted-foreground">
                Aqui exibiremos os horários e as consultas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}