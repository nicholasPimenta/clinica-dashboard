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
    <>
      <div>
        <Combobox items={exames}>
          <ComboboxInput placeholder="Escolha um Exame" />
          <ComboboxContent>
            <ComboboxEmpty>Sem Exames Encontrados</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div>
        <FieldSet>
          <FieldLegend variant="label">Hábitos de Vida</FieldLegend>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox
                id="habitos-saudaveis"
                name="habitos-saudaveis"
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
      </div>
      <div>
        <FieldSet>
          <FieldLegend variant="label">Histórico de Doença Crônica</FieldLegend>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox
                id="cronico-dm"
                name="cronico-dm"
              />
              <FieldLabel
                htmlFor="cronico-dm"
                className="font-normal"
              >
                DM
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="cronico-has"
                name="cronico-has"
              />
              <FieldLabel
                htmlFor="cronico-has"
                className="font-normal"
              >
                HAS
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="cronico-dislipidemia"
                name="cronico-dislipidemia"
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
      </div>
      <div>
        <FieldSet>
          <FieldLegend variant="label">Histórico Familiar</FieldLegend>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox
                id="familiar-dm"
                name="familiar-dm"
              />
              <FieldLabel
                htmlFor="familiar-dm"
                className="font-normal"
              >
                DM
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="familiar-has"
                name="familiar-has"
              />
              <FieldLabel
                htmlFor="familiar-has"
                className="font-normal"
              >
                HAS
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="familiar-dislipidemia"
                name="familiar-dislipidemia"
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
      </div>
      <div>
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="feedback">Observações</FieldLabel>
              <Textarea id="feedback" rows={4} />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </>
  )
}

export default DocumentGenerator