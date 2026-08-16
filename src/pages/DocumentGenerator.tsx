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
import PrintPreview from "@/components/print/PrintPreview"

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

  const [erros, setErros] = useState({
    habitos: false,
    historicoCronico: false,
    historicoFamiliar: false,
    exameSelecionado: false,
  })

  const [obs, setObs] = useState("")

  function handleLimpar() {
    setObs("")
    setHabitos(HABITOS_INICIAIS)
    setHistoricoCronico(HISTORICO_CRONICO_INICIAL)
    setHistoricoFamiliar(HISTORICO_FAMILIAR_INICIAL)
    setExameSelecionado(null)
    setErros({
      habitos: false,
      historicoCronico: false,
      historicoFamiliar: false,
      exameSelecionado: false,
    })
  }

  function handleImprimir() {
    const exameInvalido = exameSelecionado === null
    const habitosInvalido = !Object.values(habitos).some((value) => value)
    const historicoCronicoInvalido = !Object.values(historicoCronico).some(
      (value) => value
    )
    const historicoFamiliarInvalido = !Object.values(historicoFamiliar).some(
      (value) => value
    )

    setErros({
      exameSelecionado: exameInvalido,
      habitos: habitosInvalido,
      historicoCronico: historicoCronicoInvalido,
      historicoFamiliar: historicoFamiliarInvalido,
    })

    if (
      exameInvalido ||
      habitosInvalido ||
      historicoCronicoInvalido ||
      historicoFamiliarInvalido
    )
      return
    window.print()
  }

  return (
    <>
      <div className="min-h-screen bg-muted/30 print:hidden">
        <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8 lg:px-12">
          <header>
            <img
              src="/img/LogoProvisorio.png"
              alt="Logo"
              className="mx-auto my-4 w-1/4 max-w-56"
            />
            <h1 className="mb-6 text-center text-xl font-bold">
              Formulário para Impressão
            </h1>
          </header>
          <section>
            <div>
              <Combobox
                items={exames}
                value={exameSelecionado}
                onValueChange={(value) => {
                  setExameSelecionado(value)
                  if (value) {
                    setErros((errosAtuais) => ({
                      ...errosAtuais,
                      exameSelecionado: false,
                    }))
                  }
                }}
              >
                <FieldLabel
                  htmlFor="exame"
                  className="mb-2 text-lg font-semibold"
                >
                  Exame
                </FieldLabel>
                <ComboboxInput
                  placeholder="Escolha um Exame"
                  id="exame"
                  aria-invalid={erros.exameSelecionado}
                  aria-describedby={
                    erros.exameSelecionado ? "exame-erro" : undefined
                  }
                  className="aria-invalid:border-destructive"
                />
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
              {erros.exameSelecionado && (
                <p className="mt-1 text-sm text-destructive" id="exame-erro">
                  Selecione um Exame antes de Imprimir.
                </p>
              )}
            </div>
          </section>
          <section className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border px-4 pb-4 shadow-sm has-aria-invalid:border-destructive">
              <FieldSet
                aria-invalid={erros.habitos}
                aria-describedby={erros.habitos ? "habitos-erro" : undefined}
              >
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
                      onCheckedChange={(checked) => {
                        setHabitos((habitosAtuais) => ({
                          ...habitosAtuais,
                          habitosSaudaveis: checked,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            habitos: false,
                          }))
                        }
                      }}
                    />
                    <FieldLabel
                      htmlFor="habitos-saudaveis"
                      className="font-normal"
                    >
                      Hábitos de Vida Saudáveis
                    </FieldLabel>
                  </Field>
                  <Field orientation="horizontal">
                    <Checkbox
                      id="habitos-tabagismo"
                      name="habitos-tabagismo"
                      className="cursor-pointer"
                      checked={habitos.tabagismo}
                      onCheckedChange={(checked) => {
                        setHabitos((habitosAtuais) => ({
                          ...habitosAtuais,
                          tabagismo: checked,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            habitos: false,
                          }))
                        }
                      }}
                    />
                    <FieldLabel
                      htmlFor="habitos-tabagismo"
                      className="font-normal"
                    >
                      Tabagismo
                    </FieldLabel>
                  </Field>
                  <Field orientation="horizontal">
                    <Checkbox
                      id="habitos-sedentarismo"
                      name="habitos-sedentarismo"
                      className="cursor-pointer"
                      checked={habitos.sedentarismo}
                      onCheckedChange={(checked) => {
                        setHabitos((habitosAtuais) => ({
                          ...habitosAtuais,
                          sedentarismo: checked,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            habitos: false,
                          }))
                        }
                      }}
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
                      onCheckedChange={(checked) => {
                        setHabitos((habitosAtuais) => ({
                          ...habitosAtuais,
                          etilismo: checked,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            habitos: false,
                          }))
                        }
                      }}
                    />
                    <FieldLabel
                      htmlFor="habitos-etilismo"
                      className="font-normal"
                    >
                      Etilismo
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              {erros.habitos && (
                <p className="mt-1 text-sm text-destructive" id="habitos-erro">
                  Selecione pelo menos um hábito antes de Imprimir.
                </p>
              )}
            </div>
            <div className="rounded-lg border px-4 pb-4 shadow-sm has-aria-invalid:border-destructive">
              <FieldSet
                aria-invalid={erros.historicoCronico}
                aria-describedby={
                  erros.historicoCronico ? "cronico-erro" : undefined
                }
              >
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
                      onCheckedChange={(checked) => {
                        setHistoricoCronico((historicoAtual) => ({
                          ...historicoAtual,
                          dm: checked,
                          nenhuma: false,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoCronico: false,
                          }))
                        }
                      }}
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
                      onCheckedChange={(checked) => {
                        setHistoricoCronico((historicoAtual) => ({
                          ...historicoAtual,
                          has: checked,
                          nenhuma: false,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoCronico: false,
                          }))
                        }
                      }}
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
                      onCheckedChange={(checked) => {
                        setHistoricoCronico((historicoAtual) => ({
                          ...historicoAtual,
                          dislipidemia: checked,
                          nenhuma: false,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoCronico: false,
                          }))
                        }
                      }}
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
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoCronico: false,
                          }))
                        }
                      }}
                    />
                    <FieldLabel
                      htmlFor="cronico-nenhuma"
                      className="font-normal"
                    >
                      Nenhuma
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              {erros.historicoCronico && (
                <p className="mt-1 text-sm text-destructive" id="cronico-erro">
                  Selecione pelo menos um Histórico Crônico antes de Imprimir.
                </p>
              )}
            </div>
            <div className="rounded-lg border px-4 pb-4 shadow-sm has-aria-invalid:border-destructive">
              <FieldSet
                aria-invalid={erros.historicoFamiliar}
                aria-describedby={
                  erros.historicoFamiliar ? "familiar-erro" : undefined
                }
              >
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
                      onCheckedChange={(checked) => {
                        setHistoricoFamiliar((familiarAtual) => ({
                          ...familiarAtual,
                          dm: checked,
                          nenhuma: false,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoFamiliar: false,
                          }))
                        }
                      }}
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
                      onCheckedChange={(checked) => {
                        setHistoricoFamiliar((familiarAtual) => ({
                          ...familiarAtual,
                          has: checked,
                          nenhuma: false,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoFamiliar: false,
                          }))
                        }
                      }}
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
                      onCheckedChange={(checked) => {
                        setHistoricoFamiliar((familiarAtual) => ({
                          ...familiarAtual,
                          dislipidemia: checked,
                          nenhuma: false,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoFamiliar: false,
                          }))
                        }
                      }}
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
                      onCheckedChange={(checked) => {
                        setHistoricoFamiliar((familiarAtual) => ({
                          ...familiarAtual,
                          coronariana: checked,
                          nenhuma: false,
                        }))
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoFamiliar: false,
                          }))
                        }
                      }}
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
                        if (checked) {
                          setErros((errosAtuais) => ({
                            ...errosAtuais,
                            historicoFamiliar: false,
                          }))
                        }
                      }}
                    />
                    <FieldLabel
                      htmlFor="familiar-nenhuma"
                      className="font-normal"
                    >
                      Nenhuma
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              {erros.historicoFamiliar && (
                <p className="mt-1 text-sm text-destructive" id="familiar-erro">
                  Selecione pelo menos um Histórico Familiar antes de Imprimir.
                </p>
              )}
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
                    <div>
                      <Textarea
                        id="feedback"
                        rows={5}
                        value={obs}
                        onChange={(e) => setObs(e.target.value)}
                        maxLength={600}
                        placeholder="Registre observações clínicas relevantes..."
                        className="field-sizing-fixed overflow-y-auto border-input bg-background p-3 shadow-sm"
                      />
                      <span className="mt-2 block text-end text-sm text-muted-foreground">
                        {obs.length}/600
                      </span>
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                className="cursor-pointer p-6 text-lg"
                onClick={handleImprimir}
              >
                Imprimir
              </Button>
              <Button
                className="cursor-pointer p-6 text-lg"
                onClick={handleLimpar}
                variant="outline"
              >
                Limpar
              </Button>
            </div>
          </section>
        </main>
      </div>
      <section className="hidden print:block">
        <PrintPreview
          obs={obs}
          exameSelecionado={exameSelecionado}
          habitos={habitos}
          historicoCronico={historicoCronico}
          historicoFamiliar={historicoFamiliar}
        />
      </section>
    </>
  )
}

export default DocumentGenerator
