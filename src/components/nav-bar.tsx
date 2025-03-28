"use client";
import React, { useState } from "react";
import { Home, BookOpen, Bookmark, Settings, User, Bell, Search } from "lucide-react";
import Link from "next/link";

interface NavBarProps {
  active: "books" | "main";
}

export default function NavBar(props: NavBarProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-rose-900 text-white flex flex-col items-center py-4 space-y-6">
        <FeatherIcon />
        <Link href="/">
          <NavItem icon={<Home />} />
        </Link>        
        <NavItem icon={<BookOpen />} />
        <NavItem icon={<Bookmark />} />
        <NavItem icon={<Settings />} />
        <div className="mt-auto mb-4">
          <NavItem icon={<User />} />
        </div>
      </aside>

    </div>
  );
}

function NavItem({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 rounded-lg hover:bg-rose-700 transition">
      {icon}
    </button>
  );
}

function FeatherIcon() {
  return <div className="w-6 h-6 bg-white rounded-full" />; // Placeholder para o ícone de pena
}
