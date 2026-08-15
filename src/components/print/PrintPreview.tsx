interface Habitos {
  habitosSaudaveis: boolean
  tabagismo: boolean
  sedentarismo: boolean
  etilismo: boolean
}

interface HistoricoCronico {
  dm: boolean
  has: boolean
  dislipidemia: boolean
  nenhuma: boolean
}

interface HistoricoFamiliar {
  dm: boolean
  has: boolean
  dislipidemia: boolean
  coronariana: boolean
  nenhuma: boolean
}

interface PrintOptionProps {
  label: string
  checked: boolean
}

interface PrintPreviewProps {
  obs: string
  exameSelecionado: string | null
  habitos: Habitos
  historicoCronico: HistoricoCronico
  historicoFamiliar: HistoricoFamiliar
}

const PrintOption = ({ label, checked }: PrintOptionProps) => (
  <div className="flex items-center gap-2">
    <span className="flex h-4 w-4 items-center justify-center border text-sm">
      {checked ? "✓" : ""}
    </span>
    <span className="text-sm">{label}</span>
  </div>
)

const PrintPreview = ({
  obs,
  exameSelecionado,
  habitos,
  historicoCronico,
  historicoFamiliar,
}: PrintPreviewProps) => (
  <div className="min-h-[297mm] w-[210mm] bg-white p-[15mm] flex flex-col">
    <header className="mb-6">
      <img
        src="/img/LogoProvisorio.png"
        alt="Logo Provisório"
        className="h-auto w-1/4"
      />
    </header>
    <main className="flex-1">
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Exame Selecionado:</h2>
          <p>{exameSelecionado}</p>
        </div>
        <div className="mt-4">
          <h2 className="mb-2 text-lg font-semibold">Hábitos de Vida</h2>
          <div className="flex flex-col gap-1">
            <PrintOption label="Saudável" checked={habitos.habitosSaudaveis} />
            <PrintOption label="Tabagismo" checked={habitos.tabagismo} />
            <PrintOption label="Sedentarismo" checked={habitos.sedentarismo} />
            <PrintOption label="Etilismo" checked={habitos.etilismo} />
          </div>
        </div>
      <div className="mt-4 grid grid-cols-2 gap-8">
          <div>
            <h2 className="mb-2 text-lg font-semibold">Doenças Crônicas</h2>
            <div className="flex flex-col gap-1">
              <PrintOption
                label="Diabetes Mellitus"
                checked={historicoCronico.dm}
              />
              <PrintOption
                label="Hipertensão Arterial"
                checked={historicoCronico.has}
              />
              <PrintOption
                label="Dislipidemia"
                checked={historicoCronico.dislipidemia}
              />
              <PrintOption label="Nenhuma" checked={historicoCronico.nenhuma} />
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Histórico Familiar</h2>
            <div className="flex flex-col gap-1">
              <PrintOption
                label="Diabetes Mellitus"
                checked={historicoFamiliar.dm}
              />
              <PrintOption
                label="Hipertensão Arterial"
                checked={historicoFamiliar.has}
              />
              <PrintOption
                label="Dislipidemia"
                checked={historicoFamiliar.dislipidemia}
              />
              <PrintOption
                label="Doença Coronariana"
                checked={historicoFamiliar.coronariana}
              />
              <PrintOption
                label="Nenhuma"
                checked={historicoFamiliar.nenhuma}
              />
            </div>
          </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Observações</h2>
        <p className="min-h-[25mm] break-words whitespace-pre-wrap">{obs}</p>
      </div>
    </main>
    <footer className="mt-6 pt-4 text-sm">
      <p>Tel: (+12) 21 93456-7890 / Email: contato@clinicaexemplo.com</p>
    </footer>
  </div>
)

export default PrintPreview
