"use client";

import { Role } from "@prisma/client";
import { useState } from "react";

/* ---------- ROLE LABELS ---------- */
const ROLE_LABELS: Record<Role, string> = {
  CEO: "Chief Executive Officer",
  EXECUTIVE_DIRECTOR: "Executive Director",
  MANAGER: "Manager",
  TEAM_LEADER: "Team Leader",
  EMPLOYEE: "Employee",
};

/* ---------- TEAM DATA ---------- */
const usersData = [
  // CEO
  { name: "Aashika Nethaji", email: "ash@aaruchudar.com", role: Role.CEO },

  // Executive Directors
  { name: "Venkat B", email: "venkat@aaruchudar.com", role: Role.EXECUTIVE_DIRECTOR },
  { name: "Karthik M", email: "karthik@aaruchudar.com", role: Role.EXECUTIVE_DIRECTOR },

  // Managers
  { name: "Shiyam Sundar G", email: "shiyam@aaruchudar.com", role: Role.MANAGER },
  { name: "Jagadeesan S", email: "jagadeesan@aaruchudar.com", role: Role.MANAGER },

  // Team Leaders
  { name: "Lingesh S", email: "lingesh@aaruchudar.com", role: Role.TEAM_LEADER },
  { name: "Gokulnath S", email: "gokulnath@aaruchudar.com", role: Role.TEAM_LEADER },
  { name: "Sanjith Kumar R", email: "sanjith@aaruchudar.com", role: Role.TEAM_LEADER },
  { name: "Archana T P", email: "archana@aaruchudar.com", role: Role.TEAM_LEADER },
  { name: "Atchaya S", email: "atchaya@aaruchudar.com", role: Role.TEAM_LEADER },
  { name: "Lalitha Kishore", email: "kishore@aaruchudar.com", role: Role.TEAM_LEADER },
  { name: "Aditya Yadav", email: "aditya@aaruchudar.com", role: Role.TEAM_LEADER },

  // Employees
  { name: "Kirthiga J.S", email: "kirthiga@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Sudharsana R", email: "sudharsana@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Mohamed Ijas", email: "ijas@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Thirukumaran A", email: "thirukumaran@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Amuthan S", email: "amuthan@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Sanjay S", email: "sanjay@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "J Pujith Vinay", email: "pujith@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Shelsia Sharon", email: "shelsia@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Sujith Balaji", email: "sujith@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Niroshini A", email: "niroshini@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Donadri Naga Venkata Manibabu", email: "venkatamanibabu@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Nirvika Gour", email: "nirvika@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Arun Kumar", email: "arun@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Rishabh Mishra", email: "rishabh@aaruchudar.com", role: Role.EMPLOYEE },
  { name: "Shourya Bodla", email: "shourya@aaruchudar.com", role: Role.EMPLOYEE },
];

/* ---------- ROLE ORDER ---------- */
const ROLE_ORDER: Role[] = [
  Role.CEO,
  Role.EXECUTIVE_DIRECTOR,
  Role.MANAGER,
  Role.TEAM_LEADER,
  Role.EMPLOYEE,
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<Role | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on active tab and search
  const filteredUsers = (activeTab === "all" 
    ? usersData 
    : usersData.filter(user => user.role === activeTab)
  ).filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ROLE_LABELS[user.role].toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get user initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Get role count
  const getRoleCount = (role: Role) => usersData.filter(u => u.role === role).length;

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Team
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Meet the dedicated professionals who drive our mission forward with expertise and commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-6">
            {/* Search */}
            <div className="max-w-md">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search by name, role, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                All Team ({usersData.length})
              </button>
              {ROLE_ORDER.map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveTab(role)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === role
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {ROLE_LABELS[role]} ({getRoleCount(role)})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ROLE_ORDER.map((role) => {
              const count = getRoleCount(role);
              return (
                <div 
                  key={role}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer"
                  onClick={() => setActiveTab(role)}
                >
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-900">{count}</div>
                    <div className="text-sm text-gray-600 mt-1">{ROLE_LABELS[role]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {activeTab === "all" ? "All Team Members" : ROLE_LABELS[activeTab]}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Showing {filteredUsers.length} of {usersData.length} team members
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Team Members */}
        {filteredUsers.length === 0 ? (
          <div className="text-center py-12 border border-gray-200 rounded-lg">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No team members found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        ) : activeTab === "all" ? (
          // Organized by role sections
          <div className="space-y-12">
            {ROLE_ORDER.map((role) => {
              const members = filteredUsers.filter(user => user.role === role);
              if (members.length === 0) return null;

              return (
                <div key={role} className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {ROLE_LABELS[role]}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {members.length} {members.length === 1 ? 'member' : 'members'} in this role
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {members.map((user) => (
                      <div
                        key={user.email}
                        className="bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                      >
                        <div className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center border border-gray-300">
                                <span className="text-sm font-semibold text-gray-700">
                                  {getInitials(user.name)}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 truncate">
                                {user.name}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">{ROLE_LABELS[user.role]}</p>
                              
                              <div className="mt-3">
                                <a
                                  href={`mailto:${user.email}`}
                                  className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  {user.email}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Filtered view
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <div
                key={user.email}
                className="bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center border border-gray-300 mb-4">
                      <span className="text-base font-semibold text-gray-700">
                        {getInitials(user.name)}
                      </span>
                    </div>
                    
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      {user.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">{ROLE_LABELS[user.role]}</p>
                    
                    <div className="w-full">
                      <a
                        href={`mailto:${user.email}`}
                        className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-md transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Team Overview
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{usersData.length}</div>
                  <div className="text-sm text-gray-600">Total Professionals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{ROLE_ORDER.length}</div>
                  <div className="text-sm text-gray-600">Leadership Levels</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{new Date().getFullYear()}</div>
                  <div className="text-sm text-gray-600">Working Together</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}