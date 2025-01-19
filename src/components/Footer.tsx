const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span>© 2025 Dylan Harden</span>
          <span>•</span>
          <span>Released under MIT License</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Design inspired by Anthropic Design System</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;