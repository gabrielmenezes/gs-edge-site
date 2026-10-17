export default function ProjectVisual({ game = false }: { game?: boolean }) {
  if (game) {
    return (
      <div className="project-visual dc-visual" role="img" aria-label="Ilustração conceitual de racks de um data center">
        <div className="visual-topline"><span>DC / INFRASTRUCTURE</span><span>CONCEITO</span></div>
        <div className="rack-floor">
          {[0, 1, 2, 3].map(rack => (
            <div className="server-rack" key={rack}>
              <span className="rack-label">RACK 0{rack + 1}</span>
              {[0, 1, 2, 3, 4, 5].map(unit => <div className="server-unit" key={unit}><i /><i /><span /></div>)}
              <div className="rack-vents" />
            </div>
          ))}
        </div>
        <div className="visual-bottom"><span>CAPACIDADE / ENERGIA / REFRIGERAÇÃO</span><span>↗</span></div>
      </div>
    );
  }

  return (
    <div className="project-visual money-visual" role="img" aria-label="Ilustração conceitual de planejamento financeiro, sem dados reais">
      <div className="visual-topline"><span>GSMONEY / PLANEJAMENTO</span><span>CONCEITO</span></div>
      <div className="money-layout">
        <div>
          <span className="visual-caption">Um olhar para o futuro</span>
          <div className="money-heading">Cada escolha<br />conta.</div>
          <div className="money-pots"><i /><i /><i /><i /></div>
        </div>
        <div className="money-chart">
          {[24, 35, 30, 43, 48, 62, 73, 90].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}
        </div>
      </div>
      <div className="visual-bottom"><span>ORGANIZAR. PLANEJAR. CONSTRUIR.</span><span>↗</span></div>
    </div>
  );
}
