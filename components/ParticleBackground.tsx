const ParticleBackground = () => {
    return (
        <>
            <div className="absolute inset-0 hidden md:block overflow-hidden bg-blue-cosmos/50">
                {/* Use fixed positions instead of random */}
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '15%',
                    top: '22%',
                    width: '4px',
                    height: '4px',
                    background: 'rgba(100, 180, 255, 0.25)',
                    boxShadow: '0 0 10px rgba(100, 180, 255, 0.4)',
                    animation: 'pulse 4s ease-in-out infinite',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '45%',
                    top: '68%',
                    width: '3px',
                    height: '3px',
                    background: 'rgba(120, 200, 255, 0.3)',
                    boxShadow: '0 0 8px rgba(120, 200, 255, 0.5)',
                    animation: 'pulse 3.5s ease-in-out infinite',
                    animationDelay: '0.5s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '72%',
                    top: '35%',
                    width: '5px',
                    height: '5px',
                    background: 'rgba(80, 160, 240, 0.2)',
                    boxShadow: '0 0 12px rgba(80, 160, 240, 0.4)',
                    animation: 'pulse 5s ease-in-out infinite',
                    animationDelay: '1.2s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '88%',
                    top: '82%',
                    width: '2px',
                    height: '2px',
                    background: 'rgba(140, 210, 255, 0.35)',
                    boxShadow: '0 0 6px rgba(140, 210, 255, 0.5)',
                    animation: 'pulse 3s ease-in-out infinite',
                    animationDelay: '0.8s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '8%',
                    top: '91%',
                    width: '4px',
                    height: '4px',
                    background: 'rgba(90, 170, 250, 0.25)',
                    boxShadow: '0 0 9px rgba(90, 170, 250, 0.4)',
                    animation: 'pulse 4.2s ease-in-out infinite',
                    animationDelay: '1.8s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '32%',
                    top: '15%',
                    width: '3px',
                    height: '3px',
                    background: 'rgba(110, 190, 255, 0.3)',
                    boxShadow: '0 0 7px rgba(110, 190, 255, 0.45)',
                    animation: 'pulse 3.8s ease-in-out infinite',
                    animationDelay: '0.3s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '55%',
                    top: '47%',
                    width: '4px',
                    height: '4px',
                    background: 'rgba(70, 150, 230, 0.25)',
                    boxShadow: '0 0 11px rgba(70, 150, 230, 0.4)',
                    animation: 'pulse 4.5s ease-in-out infinite',
                    animationDelay: '1.5s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '95%',
                    top: '12%',
                    width: '2px',
                    height: '2px',
                    background: 'rgba(130, 200, 245, 0.35)',
                    boxShadow: '0 0 5px rgba(130, 200, 245, 0.5)',
                    animation: 'pulse 3.2s ease-in-out infinite',
                    animationDelay: '0.1s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '22%',
                    top: '76%',
                    width: '3px',
                    height: '3px',
                    background: 'rgba(100, 180, 240, 0.3)',
                    boxShadow: '0 0 8px rgba(100, 180, 240, 0.45)',
                    animation: 'pulse 4.8s ease-in-out infinite',
                    animationDelay: '2s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '68%',
                    top: '58%',
                    width: '5px',
                    height: '5px',
                    background: 'rgba(85, 165, 235, 0.2)',
                    boxShadow: '0 0 13px rgba(85, 165, 235, 0.35)',
                    animation: 'pulse 5.5s ease-in-out infinite',
                    animationDelay: '0.7s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '12%',
                    top: '42%',
                    width: '4px',
                    height: '4px',
                    background: 'rgba(115, 195, 250, 0.25)',
                    boxShadow: '0 0 10px rgba(115, 195, 250, 0.4)',
                    animation: 'pulse 3.6s ease-in-out infinite',
                    animationDelay: '1.1s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '78%',
                    top: '27%',
                    width: '3px',
                    height: '3px',
                    background: 'rgba(95, 175, 245, 0.3)',
                    boxShadow: '0 0 7px rgba(95, 175, 245, 0.45)',
                    animation: 'pulse 4.3s ease-in-out infinite',
                    animationDelay: '0.4s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '40%',
                    top: '94%',
                    width: '2px',
                    height: '2px',
                    background: 'rgba(125, 205, 255, 0.35)',
                    boxShadow: '0 0 6px rgba(125, 205, 255, 0.5)',
                    animation: 'pulse 3.1s ease-in-out infinite',
                    animationDelay: '1.9s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '60%',
                    top: '8%',
                    width: '4px',
                    height: '4px',
                    background: 'rgba(75, 155, 225, 0.25)',
                    boxShadow: '0 0 9px rgba(75, 155, 225, 0.4)',
                    animation: 'pulse 4.7s ease-in-out infinite',
                    animationDelay: '0.9s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '50%',
                    top: '52%',
                    width: '5px',
                    height: '5px',
                    background: 'rgba(105, 185, 255, 0.2)',
                    boxShadow: '0 0 12px rgba(105, 185, 255, 0.35)',
                    animation: 'pulse 5.2s ease-in-out infinite',
                    animationDelay: '1.3s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '82%',
                    top: '72%',
                    width: '3px',
                    height: '3px',
                    background: 'rgba(135, 215, 255, 0.3)',
                    boxShadow: '0 0 8px rgba(135, 215, 255, 0.45)',
                    animation: 'pulse 3.9s ease-in-out infinite',
                    animationDelay: '0.2s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '18%',
                    top: '62%',
                    width: '4px',
                    height: '4px',
                    background: 'rgba(88, 168, 238, 0.25)',
                    boxShadow: '0 0 10px rgba(88, 168, 238, 0.4)',
                    animation: 'pulse 4.1s ease-in-out infinite',
                    animationDelay: '1.6s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '92%',
                    top: '46%',
                    width: '2px',
                    height: '2px',
                    background: 'rgba(122, 202, 252, 0.35)',
                    boxShadow: '0 0 5px rgba(122, 202, 252, 0.5)',
                    animation: 'pulse 3.4s ease-in-out infinite',
                    animationDelay: '0.6s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '28%',
                    top: '38%',
                    width: '3px',
                    height: '3px',
                    background: 'rgba(92, 172, 242, 0.3)',
                    boxShadow: '0 0 7px rgba(92, 172, 242, 0.45)',
                    animation: 'pulse 4.4s ease-in-out infinite',
                    animationDelay: '1.4s',
                }} />
                <div className="absolute rounded-full animate-pulse" style={{
                    left: '72%',
                    top: '84%',
                    width: '4px',
                    height: '4px',
                    background: 'rgba(118, 198, 248, 0.25)',
                    boxShadow: '0 0 9px rgba(118, 198, 248, 0.4)',
                    animation: 'pulse 4.9s ease-in-out infinite',
                    animationDelay: '0.9s',
                }} />
            </div>

            <style jsx>{`
  @keyframes pulse {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.5); }
  }
`}</style>
        </>
    )
}

export default ParticleBackground