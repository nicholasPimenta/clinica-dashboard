import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const exames = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"] as const

const HABITOS_INICIAIS = {
  habitosSaudaveis: false,
  tabagismo: false,
  sedentarismo: false,
  etilismo: false,
}

const HISTORICO_CRONICO_INICIAL = {
  dm: false,
  has: false,
  dislipidemia: false,
  nenhuma: false,
}

const HISTORICO_FAMILIAR_INICIAL = {
  dm: false,
  has: false,
  dislipidemia: false,
  coronariana: false,
  nenhuma: false,
}

function DocumentGenerator() {
  const [exameSelecionado, setExameSelecionado] = useState<string | null>(null)

  const [habitos, setHabitos] = useState({
    habitosSaudaveis: false,
    tabagismo: false,
    sedentarismo: false,
    etilismo: false,
  })

  const [historicoCronico, setHistoricoCronico] = useState({
    dm: false,
    has: false,
    dislipidemia: false,
    nenhuma: false,
  })

  const [historicoFamiliar, setHistoricoFamiliar] = useState({
    dm: false,
    has: false,
    dislipidemia: false,
    coronariana: false,
    nenhuma: false,
  })

  const [obs, setObs] = useState("")

  return (
    <main className="container mx-auto py-8">
      <header>
        <img
          src="img/LogoProvisorio.png"
          alt="Logo"
          className="mx-auto my-4 size-1/4"
        />
      </header>
      <section>
        <div>
          <Combobox
            items={exames}
            value={exameSelecionado}
            onValueChange={(value) => setExameSelecionado(value)}
          >
            <ComboboxInput placeholder="Escolha um Exame" />
            <ComboboxContent>
              <ComboboxEmpty>Sem Exames Encontrados</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem
                    className="cursor-pointer"
                    key={item}
                    value={item}
                  >
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </section>
      <section>
        <div>
          <FieldSet>
            <FieldLegend className="pt-4 font-extrabold data-[variant=legend]:text-lg">
              Hábitos de Vida
            </FieldLegend>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox
                  id="habitos-saudaveis"
                  name="habitos-saudaveis"
                  className="cursor-pointer"
                  checked={habitos.habitosSaudaveis}
                  onCheckedChange={(checked) =>
                    setHabitos((habitosAtuais) => ({
                      ...habitosAtuais,
                      habitosSaudaveis: checked,
                    }))
                  }
                />
                <FieldLabel htmlFor="habitos-saudaveis" className="font-normal">
                  Hábitos de Vida Saudáveis
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="habitos-tabagismo"
                  name="habitos-tabagismo"
                  className="cursor-pointer"
                  checked={habitos.tabagismo}
                  onCheckedChange={(checked) =>
                    setHabitos((habitosAtuais) => ({
                      ...habitosAtuais,
                      tabagismo: checked,
                    }))
                  }
                />
                <FieldLabel htmlFor="habitos-tabagismo" className="font-normal">
                  Tabagismo
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="habitos-sedentarismo"
                  name="habitos-sedentarismo"
                  className="cursor-pointer"
                  checked={habitos.sedentarismo}
                  onCheckedChange={(checked) =>
                    setHabitos((habitosAtuais) => ({
                      ...habitosAtuais,
                      sedentarismo: checked,
                    }))
                  }
                />
                <FieldLabel
                  htmlFor="habitos-sedentarismo"
                  className="font-normal"
                >
                  Sedentarismo
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="habitos-etilismo"
                  name="habitos-etilismo"
                  className="cursor-pointer"
                  checked={habitos.etilismo}
                  onCheckedChange={(checked) =>
                    setHabitos((habitosAtuais) => ({
                      ...habitosAtuais,
                      etilismo: checked,
                    }))
                  }
                />
                <FieldLabel htmlFor="habitos-etilismo" className="font-normal">
                  Etilismo
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <div>
          <FieldSet>
            <FieldLegend className="pt-4 font-extrabold data-[variant=legend]:text-lg">
              Histórico de Doença Crônica
            </FieldLegend>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox
                  id="cronico-dm"
                  name="cronico-dm"
                  className="cursor-pointer"
                  checked={historicoCronico.dm}
                  onCheckedChange={(checked) =>
                    setHistoricoCronico((historicoAtual) => ({
                      ...historicoAtual,
                      dm: checked,
                      nenhuma: false,
                    }))
                  }
                />
                <FieldLabel htmlFor="cronico-dm" className="font-normal">
                  DM
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="cronico-has"
                  name="cronico-has"
                  className="cursor-pointer"
                  checked={historicoCronico.has}
                  onCheckedChange={(checked) =>
                    setHistoricoCronico((historicoAtual) => ({
                      ...historicoAtual,
                      has: checked,
                      nenhuma: false,
                    }))
                  }
                />
                <FieldLabel htmlFor="cronico-has" className="font-normal">
                  HAS
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="cronico-dislipidemia"
                  name="cronico-dislipidemia"
                  className="cursor-pointer"
                  checked={historicoCronico.dislipidemia}
                  onCheckedChange={(checked) =>
                    setHistoricoCronico((historicoAtual) => ({
                      ...historicoAtual,
                      dislipidemia: checked,
                      nenhuma: false,
                    }))
                  }
                />
                <FieldLabel
                  htmlFor="cronico-dislipidemia"
                  className="font-normal"
                >
                  Dislipidemia
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="cronico-nenhuma"
                  name="cronico-nenhuma"
                  className="cursor-pointer"
                  checked={historicoCronico.nenhuma}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setHistoricoCronico({
                        dm: false,
                        has: false,
                        dislipidemia: false,
                        nenhuma: true,
                      })
                    } else {
                      setHistoricoCronico((historicoAtual) => ({
                        ...historicoAtual,
                        nenhuma: false,
                      }))
                    }
                  }}
                />
                <FieldLabel htmlFor="cronico-nenhuma" className="font-normal">
                  Nenhuma
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <div>
          <FieldSet>
            <FieldLegend className="pt-4 font-extrabold data-[variant=legend]:text-lg">
              Histórico Familiar
            </FieldLegend>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox
                  id="familiar-dm"
                  name="familiar-dm"
                  className="cursor-pointer"
                  checked={historicoFamiliar.dm}
                  onCheckedChange={(checked) =>
                    setHistoricoFamiliar((familiarAtual) => ({
                      ...familiarAtual,
                      dm: checked,
                      nenhuma: false,
                    }))
                  }
                />
                <FieldLabel htmlFor="familiar-dm" className="font-normal">
                  DM
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="familiar-has"
                  name="familiar-has"
                  className="cursor-pointer"
                  checked={historicoFamiliar.has}
                  onCheckedChange={(checked) =>
                    setHistoricoFamiliar((familiarAtual) => ({
                      ...familiarAtual,
                      has: checked,
                      nenhuma: false,
                    }))
                  }
                />
                <FieldLabel htmlFor="familiar-has" className="font-normal">
                  HAS
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="familiar-dislipidemia"
                  name="familiar-dislipidemia"
                  className="cursor-pointer"
                  checked={historicoFamiliar.dislipidemia}
                  onCheckedChange={(checked) =>
                    setHistoricoFamiliar((familiarAtual) => ({
                      ...familiarAtual,
                      dislipidemia: checked,
                      nenhuma: false,
                    }))
                  }
                />
                <FieldLabel
                  htmlFor="familiar-dislipidemia"
                  className="font-normal"
                >
                  Dislipidemia
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="familiar-coronariana"
                  name="familiar-coronariana"
                  className="cursor-pointer"
                  checked={historicoFamiliar.coronariana}
                  onCheckedChange={(checked) =>
                    setHistoricoFamiliar((familiarAtual) => ({
                      ...familiarAtual,
                      coronariana: checked,
                      nenhuma: false,
                    }))
                  }
                />
                <FieldLabel
                  htmlFor="familiar-coronariana"
                  className="font-normal"
                >
                  Doença Coronariana
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="familiar-nenhuma"
                  name="familiar-nenhuma"
                  className="cursor-pointer"
                  checked={historicoFamiliar.nenhuma}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setHistoricoFamiliar({
                        dm: false,
                        has: false,
                        dislipidemia: false,
                        coronariana: false,
                        nenhuma: true,
                      })
                    } else {
                      setHistoricoFamiliar((familiarAtual) => ({
                        ...familiarAtual,
                        nenhuma: false,
                      }))
                    }
                  }}
                />
                <FieldLabel htmlFor="familiar-nenhuma" className="font-normal">
                  Nenhuma
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </section>
      <section>
        <div>
          <FieldSet className="w-full">
            <FieldGroup>
              <Field>
                <FieldLabel
                  htmlFor="feedback"
                  className="pt-4 text-lg font-extrabold"
                >
                  Observações
                </FieldLabel>
                <Textarea
                  id="feedback"
                  rows={4}
                  value={obs}
                  onChange={(e) => setObs(e.target.value)}
                />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          <Button
            className="cursor-pointer p-6 text-lg"
            onClick={() => {
              setObs("")
              setHabitos(HABITOS_INICIAIS)
              setHistoricoCronico(HISTORICO_CRONICO_INICIAL)
              setHistoricoFamiliar(HISTORICO_FAMILIAR_INICIAL)
              setExameSelecionado(null)
            }}
          >
            Limpar
          </Button>
          <Button
            className="cursor-pointer p-6 text-lg"
            onClick={() => window.print()}
          >
            Imprimir
          </Button>
        </div>
      </section>
    </main>
  )
}

export default DocumentGenerator
