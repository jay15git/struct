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
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContents,
    TabsContent,
} from "@/components/animate-ui/components/animate/tabs";
import {
    Code,
    CodeHeader,
    CodeBlock
} from "@/components/animate-ui/components/animate/code";
import { FileCode } from "lucide-react";

const sampleCode = `import * as React from 'react';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-primary">
        Hello Structify!
      </h1>
      <p className="mt-4 text-muted-foreground">
        Visualizing repositories has never been easier.
      </p>
    </div>
  );
}`;

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
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger />
                        <h1 className="text-lg font-semibold">GitHub Repo Structure</h1>
                    </div>
                    <ThemeTogglerButton variant="outline" size="sm" />
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
                        <div className="flex gap-8 items-start">
                            {/* File Tree column */}
                            <div className="w-80 border rounded-xl overflow-hidden shadow-sm bg-card shrink-0">
                                <Files>
                                    <FileTree data={data} />
                                </Files>
                            </div>

                            {/* Tabs column */}
                            <div className="flex-1 min-w-0">
                                <Tabs defaultValue="code">
                                    <TabsList>
                                        <TabsTrigger value="code">Code</TabsTrigger>
                                        <TabsTrigger value="preview">Preview</TabsTrigger>
                                        <TabsTrigger value="info">Info</TabsTrigger>
                                    </TabsList>
                                    <TabsContents className="mt-4">
                                        <TabsContent value="code">
                                            <Code code={sampleCode} className="min-h-100">
                                                <CodeHeader icon={FileCode} copyButton>
                                                    App.tsx
                                                </CodeHeader>
                                                <CodeBlock lang="tsx" writing />
                                            </Code>
                                        </TabsContent>
                                        <TabsContent value="preview">
                                            <div className="p-6 border rounded-lg bg-card min-h-100">
                                                <h3 className="text-lg font-medium mb-4">Live Preview</h3>
                                                <p className="text-muted-foreground">Preview of the selected component or file.</p>
                                            </div>
                                        </TabsContent>
                                        <TabsContent value="info">
                                            <div className="p-6 border rounded-lg bg-card min-h-100">
                                                <h3 className="text-lg font-medium mb-4">Repository Info</h3>
                                                <p className="text-muted-foreground">Detailed metadata about the current repository.</p>
                                            </div>
                                        </TabsContent>
                                    </TabsContents>
                                </Tabs>
                            </div>
                        </div>
                    )}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

export default DocsPage;
