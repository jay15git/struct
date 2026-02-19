'use client';

import * as React from 'react';
import { Files } from "@/components/animate-ui/components/radix/files";
import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarInset,
    SidebarTrigger,
} from "@/components/animate-ui/components/radix/sidebar";
import { FileTree } from "@/components/file-tree";
import { getRepoTree, type FileNode } from "@/lib/github";
import { LayoutDashboard, Settings, Users, FolderOpen } from "lucide-react";

const DocsPage = () => {
    const [data, setData] = React.useState<FileNode[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                // Defaulting to tw-animate-css for demonstration
                const tree = await getRepoTree('sipeed', 'picoclaw');
                setData(tree);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton isActive>
                                        <LayoutDashboard />
                                        <span>Dashboard</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <FolderOpen />
                                        <span>Projects</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Users />
                                        <span>Team</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <Settings />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold">GitHub Repo Structure</h1>
                </header>
                <main className="p-8">
                    {loading ? (
                        <div className="flex items-center justify-center h-64">
                            <p className="text-muted-foreground">Loading repository structure...</p>
                        </div>
                    ) : error ? (
                        <div className="p-4 border border-destructive/50 bg-destructive/10 text-destructive rounded-lg">
                            Error: {error}
                        </div>
                    ) : (
                        <div className="max-w-md mx-auto">
                            <div className="border rounded-xl overflow-hidden shadow-sm bg-card">
                                <Files>
                                    <FileTree data={data} />
                                </Files>
                            </div>
                        </div>
                    )}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

export default DocsPage;
