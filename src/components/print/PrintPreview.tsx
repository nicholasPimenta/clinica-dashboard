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
  <div className="min-h-[297mm] w-[210mm] bg-white p-4">
    {obs}
    {exameSelecionado && (
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Exame Selecionado:</h2>
        <p>{exameSelecionado}</p>
      </div>
    )}
    {habitos && (
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Habitos de Vida</h2>
        <PrintOption label="Saudável" checked={habitos.habitosSaudaveis} />
        <PrintOption label="Tabagismo" checked={habitos.tabagismo} />
        <PrintOption label="Sedentarismo" checked={habitos.sedentarismo} />
        <PrintOption label="Etilismo" checked={habitos.etilismo} />
      </div>
    )}
    {historicoCronico && (
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Doenças Crônicas</h2>
        <PrintOption label="Diabetes Mellitus" checked={historicoCronico.dm} />
        <PrintOption label="Hipertensão Arterial" checked={historicoCronico.has} />
        <PrintOption label="Dislipidemia" checked={historicoCronico.dislipidemia} />
        <PrintOption label="Nenhuma" checked={historicoCronico.nenhuma} />
      </div>
    )}
    {historicoFamiliar && (
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Histórico Familiar</h2>
        <PrintOption label="Diabetes Mellitus" checked={historicoFamiliar.dm} />
        <PrintOption label="Hipertensão Arterial" checked={historicoFamiliar.has} />
        <PrintOption label="Dislipidemia" checked={historicoFamiliar.dislipidemia} />
        <PrintOption label="Doença Coronariana" checked={historicoFamiliar.coronariana} />
        <PrintOption label="Nenhuma" checked={historicoFamiliar.nenhuma} />
      </div>
    )}
  </div>
)

export default PrintPreview
