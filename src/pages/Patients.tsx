import { Search, UserPlus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Patients() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Pacientes
          </h1>

          <p className="text-sm text-muted-foreground">
            Consulte e gerencie os pacientes da clínica.
          </p>
        </div>

        <Button>
          <UserPlus className="size-4" />
          Novo paciente
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de pacientes</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="relative mb-6 max-w-sm">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              className="pl-9"
              placeholder="Pesquisar paciente..."
            />
          </div>

          <div className="flex min-h-56 items-center justify-center rounded-lg border border-dashed">
            <div className="text-center">
              <Users className="mx-auto mb-3 size-8 text-muted-foreground" />

              <p className="font-medium">
                Nenhum paciente cadastrado
              </p>

              <p className="text-sm text-muted-foreground">
                A lista com dados fictícios será adicionada depois.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}