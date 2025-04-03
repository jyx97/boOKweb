import { Home, BookOpen, Bookmark, Settings, User} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const navBarContent=[
    {
      key:"Home",
      link:"/",
      icon:<Home />
    },
    {
      key:"Books",
      link:"/books",
      icon:<BookOpen />
    },
    {
      key:"Bookmart",
      link:"/",
      icon:<Bookmark />
    },
    {
      key:"Settings",
      link:"/",
      icon:<Settings />
    },
    {
      key: "User",
      link: "/perfil",
      icon: <User />,
    }    
    
  ]

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-rose-900 text-white flex flex-col items-center py-4 space-y-6">
        <FeatherIcon />
        {navBarContent.map((content) => (
          <Link key={content.key} href={content.link}>
            <NavItem icon={content.icon} />
          </Link>
        ))}
      </aside>
    </div>
  );
}

function NavItem({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="mt-auto mb-4">
      <button className="p-2 rounded-lg hover:bg-rose-700 transition">
        {icon}
      </button>
    </div>
  );
}

function FeatherIcon() {
  return <div className="w-6 h-6 bg-white rounded-full" />; // Placeholder para o ícone de pena
}
