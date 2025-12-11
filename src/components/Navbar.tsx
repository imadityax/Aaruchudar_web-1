"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
	const [show, setShow] = useState(true);
	const [activeTab, setActiveTab] = useState('home');
	const [mobileOpen, setMobileOpen] = useState(false);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
				setShow(false);
			} else {
				setShow(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ id: 'home', label: 'Home', href: '/' },
		{ id: 'blog', label: 'Blog', href: '/blog' },
		{ id: 'research', label: 'Research', href: '/research' },
		{ id: 'quiz', label: 'Quiz', href: '/quiz' },
		{ id: 'contact', label: 'Contact', href: '/contact' },
		{ id: 'product', label: 'Product', href: '/productpage' }
	];

	return (
		<>
			{/* Desktop / Large Screen Navbar */}
			<header
				className={`hidden md:block fixed z-[999] top-0 left-1/2 -translate-x-1/2 transition-all duration-500 ${
					show ? 'translate-y-0' : '-translate-y-28'
				}`}
				role="navigation"
				aria-label="Primary Navigation"
			>
				<div className="w-full px-5 py-2 flex items-center justify-center gap-6 whitespace-nowrap overflow-x-auto no-scrollbar rounded-full backdrop-blur-lg bg-white/2">
					<Link href="/" className="flex items-center gap-2 pr-4 no-underline" aria-label="Home">
						<div className="w-9 h-9 rounded-xl overflow-hidden">
							<Image src="/logo2.png" alt="Aaruchudar logo" width={36} height={36} className="object-cover" />
						</div>
						<span className="text-base font-bold tracking-tight text-white">Aaruchudar</span>
					</Link>

					<nav className="flex items-center gap-5 whitespace-nowrap" aria-label="Main menu">
						{navItems.map((item) => {
							const isActive = activeTab === item.id;
							return (
								<Link
									key={item.id}
									href={item.href}
									onClick={() => setActiveTab(item.id)}
									className={`text-sm font-medium transition-colors no-underline ${
										isActive ? 'text-orange-400' : 'text-white/80 hover:text-white'
									}`}
									aria-label={item.label}
									aria-current={isActive ? 'page' : undefined}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>

					<Link
						aria-label="Login"
						className={`text-sm font-medium transition-colors no-underline ${activeTab === 'login' ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}
						href="/login"
						onClick={() => setActiveTab('login')}
					>
						Login
					</Link>
				</div>
			</header>

			{/* Mobile Top Bar */}
			<div className={`md:hidden fixed top-0 left-0 right-0 z-[998] transition-transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
				<div className="flex items-center justify-between px-4 py-3 backdrop-blur-lg bg-white/2 rounded-b-full">
					<Link href="/" className="flex items-center gap-2 no-underline" aria-label="Home">
						<Image src="/logo2.png" alt="Logo" width={32} height={32} className="rounded-lg" />
						<span className="text-base font-semibold text-white">Aaruchudar</span>
					</Link>
					<div className="flex items-center gap-2">
						<Link href="/login" aria-label="Login" onClick={() => setActiveTab('login')} className={`text-sm font-medium no-underline ${activeTab === 'login' ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}>Login</Link>
						<button
							aria-label="Toggle menu"
							aria-expanded={mobileOpen}
							onClick={() => setMobileOpen((o) => !o)}
							className="p-2 rounded-md text-white/80 hover:bg-white/10 active:scale-95 transition"
						>
							{mobileOpen ? '✕' : '☰'}
						</button>
					</div>
				</div>
				{/* Mobile dropdown panel */}
				<div
					className={`px-4 overflow-hidden transition-all duration-300 backdrop-blur-lg bg-white/2 ${mobileOpen ? 'max-h-[28rem] py-4 rounded-b-full' : 'max-h-0 py-0'}`}
				>
					<nav className="grid grid-cols-1 gap-3" aria-label="Mobile navigation">
						{navItems.map(item => {
							const isActive = activeTab === item.id;
							return (
								<Link
									key={item.id}
									href={item.href}
									onClick={() => { setActiveTab(item.id); setMobileOpen(false); }}
									className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition no-underline ${isActive ? 'text-orange-400' : 'text-white/80 hover:text-white'}`}
								>
									<span>{item.label}</span>
								</Link>
							);
						})}
					</nav>
				</div>
			</div>

			{/* Mobile Bottom Nav */}
			<nav className="md:hidden fixed bottom-0 left-0 right-0 z-[998] backdrop-blur-lg bg-white/2 flex justify-around py-2 rounded-t-full">
				{navItems.map(item => {
					const isActive = activeTab === item.id;
					return (
						<Link
							key={item.id}
							href={item.href}
							onClick={() => setActiveTab(item.id)}
							className={`text-xs font-medium no-underline ${isActive ? 'text-orange-400' : 'text-white/70'}`}
							aria-label={item.label}
						>
							{item.label}
						</Link>
					);
				})}
			</nav>
		</>
	);
}

export default Navbar;