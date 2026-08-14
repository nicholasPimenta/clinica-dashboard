interface Habitos {
    habitosSaudaveis: boolean;
    tabagismo: boolean;
    sedentarismo: boolean;
    etilismo: boolean;
}

interface HistoricoCronico {
    dm: boolean;
    has: boolean;
    dislipidemia: boolean;
    nenhuma: boolean;
}

interface HistoricoFamiliar {
    dm: boolean;
    has: boolean;
    dislipidemia: boolean;
    coronariana: boolean;
    nenhuma: boolean;
}

interface PrintPreviewProps {
    obs: string;
    exameSelecionado: string | null;
    habitos: Habitos;
    historicoCronico: HistoricoCronico;
    historicoFamiliar: HistoricoFamiliar;
}

const PrintPreview = ({obs, exameSelecionado, habitos, historicoCronico, historicoFamiliar}: PrintPreviewProps) => (
    <div className="w-[210mm] min-h-[297mm] bg-white p-4">
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
                <p>{habitos.habitosSaudaveis && "Saudável"}</p>
                <p>{habitos.tabagismo && "Tabagismo"}</p>
                <p>{habitos.sedentarismo && "Sedentarismo"}</p>
                <p>{habitos.etilismo && "Etilismo"}</p>
            </div>
        )}
        {historicoCronico && (
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Doenças Crônicas</h2>
                <p>{historicoCronico.dm && "Diabetes Mellitus"}</p>
                <p>{historicoCronico.has && "Hipertensão Arterial"}</p>
                <p>{historicoCronico.dislipidemia && "Dislipidemia"}</p>
                <p>{historicoCronico.nenhuma && "Nenhuma"}</p>
            </div>
        )}
        {historicoFamiliar && (
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Histórico Familiar</h2>
                <p>{historicoFamiliar.dm && "Diabetes Mellitus"}</p>
                <p>{historicoFamiliar.has && "Hipertensão Arterial"}</p>
                <p>{historicoFamiliar.dislipidemia && "Dislipidemia"}</p>
                <p>{historicoFamiliar.coronariana && "Doença Coronariana"}</p>
                <p>{historicoFamiliar.nenhuma && "Nenhuma"}</p>
            </div>
        )}
    </div>
)

export default PrintPreview;