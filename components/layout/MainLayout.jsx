import React from 'react';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-green-600 text-white p-4 shadow flex items-center gap-4">
                <img src="/assets/images/logo.jpeg" alt="Logo VermiMarket" className="h-10 w-10 rounded-full" />
                <h1 className="text-2xl font-bold">VermiMarket</h1>
            </header>
            {/* Main content */}
            <main className="flex-1 p-4">
                {children}
            </main>
            {/* Footer */}
            <footer className="bg-green-600 text-white p-2 text-center relative flex items-center justify-center">
                <img src="/assets/images/banner.jpeg" alt="Banner" className="absolute left-0 top-0 w-full h-full object-cover opacity-30" />
                <span className="relative z-10">&copy; 2025 VermiMarket</span>
            </footer>
        </div>
    );
}
