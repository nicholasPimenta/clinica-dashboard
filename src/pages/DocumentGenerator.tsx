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

const exames = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"] as const

function DocumentGenerator() {
  return (
    <main className="container mx-auto py-8">
      <section>
        <div>
          <Combobox items={exames}>
            <ComboboxInput placeholder="Escolha um Exame" />
            <ComboboxContent>
              <ComboboxEmpty>Sem Exames Encontrados</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem className="cursor-pointer" key={item} value={item}>
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
                <Checkbox id="habitos-saudaveis" name="habitos-saudaveis" className="cursor-pointer" />
                <FieldLabel htmlFor="habitos-saudaveis" className="font-normal">
                  Hábitos de Vida Saudáveis
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="habitos-tabagismo" name="habitos-tabagismo" className="cursor-pointer" />
                <FieldLabel htmlFor="habitos-tabagismo" className="font-normal">
                  Tabagismo
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="habitos-sedentarismo"
                  name="habitos-sedentarismo"
                  className="cursor-pointer"
                />
                <FieldLabel
                  htmlFor="habitos-sedentarismo"
                  className="font-normal"
                >
                  Sedentarismo
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="habitos-etilismo" name="habitos-etilismo" className="cursor-pointer" />
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
                <Checkbox id="cronico-dm" name="cronico-dm" className="cursor-pointer" />
                <FieldLabel htmlFor="cronico-dm" className="font-normal">
                  DM
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="cronico-has" name="cronico-has" className="cursor-pointer" />
                <FieldLabel htmlFor="cronico-has" className="font-normal">
                  HAS
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="cronico-dislipidemia"
                  name="cronico-dislipidemia"
                  className="cursor-pointer"
                />
                <FieldLabel
                  htmlFor="cronico-dislipidemia"
                  className="font-normal"
                >
                  Dislipidemia
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="cronico-nenhuma" name="cronico-nenhuma" className="cursor-pointer" />
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
                <Checkbox id="familiar-dm" name="familiar-dm" className="cursor-pointer" />
                <FieldLabel htmlFor="familiar-dm" className="font-normal">
                  DM
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="familiar-has" name="familiar-has" className="cursor-pointer" />
                <FieldLabel htmlFor="familiar-has" className="font-normal">
                  HAS
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="familiar-dislipidemia"
                  name="familiar-dislipidemia"
                  className="cursor-pointer"
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
                />
                <FieldLabel
                  htmlFor="familiar-coronariana"
                  className="font-normal"
                >
                  Doença Coronariana
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="familiar-nenhuma" name="familiar-nenhuma" className="cursor-pointer" />
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
                <FieldLabel htmlFor="feedback" className="pt-4 font-extrabold text-lg">
                  Observações
                </FieldLabel>
                <Textarea id="feedback" rows={4} />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <div className="flex pt-4 justify-center">
            <Button className="cursor-pointer text-lg p-6">Imprimir</Button>
        </div>
      </section>
    </main>
  )
}

export default DocumentGenerator