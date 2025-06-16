export function Footer() {
  return (
    <footer className="bg-muted py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="font-body">&copy; {new Date().getFullYear()} Pada Collections. All rights reserved.</p>
        <p className="font-body text-sm mt-1">Designed with passion and creativity.</p>
      </div>
    </footer>
  );
}
