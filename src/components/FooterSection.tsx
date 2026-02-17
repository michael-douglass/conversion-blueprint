const FooterSection = () => {
  return (
    <footer className="py-10 bg-dark-section relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="container px-4 text-center">
        <p className="font-bold mb-1 text-foreground">JUAN LUCAS ESTRATEGISTA LTDA</p>
        <p className="text-sm text-muted-foreground">
          © Todos os direitos reservados • CNPJ: 36.675.418/0001-46
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
