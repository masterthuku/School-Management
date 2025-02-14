export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen">
          {/* left */}
          <div className="w-1/6 bg-red-50">l</div>
          {/* right */}
          <div className="w-5/6 bg-blue-50">r</div>
        </div>
  
    );
  }
  