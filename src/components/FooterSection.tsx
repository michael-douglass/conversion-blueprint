const FooterSection = () => {
  return (
    <footer className="py-10 bg-dark-section border-t" style={{ borderColor: "hsl(220 20% 15%)" }}>
      <div className="container px-4 text-center">
        <p className="font-bold mb-1" style={{ color: "white" }}>JUAN LUCAS ESTRATEGISTA LTDA</p>
        <p className="text-sm" style={{ color: "hsl(220 14% 50%)" }}>
          © Todos os direitos reservados • CNPJ: 36.675.418/0001-46
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
