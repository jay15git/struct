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
import { FileCode, GitBranch } from "lucide-react";
import { categories, type RepoEntry } from "@/data/stacks";

const sampleCode = `// Select a repository from the sidebar to explore its structure.`;

const DocsPage = () => {
    const [data, setData] = React.useState<FileNode[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [selectedRepo, setSelectedRepo] = React.useState<RepoEntry | null>(null);

    const handleRepoClick = async (repo: RepoEntry) => {
        setSelectedRepo(repo);
        setLoading(true);
        setError(null);
        setData([]);
        try {
            const tree = await getRepoTree(repo.owner, repo.repo);
            setData(tree);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load repository');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    {categories.map((category) => (
                        <SidebarGroup key={category.name}>
                            <SidebarGroupLabel>{category.name}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {category.repos.map((repo) => (
                                        <SidebarMenuItem key={`${repo.owner}/${repo.repo}`}>
                                            <SidebarMenuButton
                                                isActive={
                                                    selectedRepo?.owner === repo.owner &&
                                                    selectedRepo?.repo === repo.repo
                                                }
                                                onClick={() => handleRepoClick(repo)}
                                                title={repo.description}
                                            >
                                                <GitBranch className="size-4 shrink-0" />
                                                <span className="truncate">{repo.name}</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger />
                        <h1 className="text-lg font-semibold">
                            {selectedRepo
                                ? `${selectedRepo.owner}/${selectedRepo.repo}`
                                : 'Structify'}
                        </h1>
                    </div>
                    <ThemeTogglerButton variant="outline" size="sm" />
                </header>
                <main className="p-8">
                    {!selectedRepo ? (
                        <div className="flex items-center justify-center h-64">
                            <p className="text-muted-foreground text-lg">
                                ← Select a repository from the sidebar to explore its file structure.
                            </p>
                        </div>
                    ) : loading ? (
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
                                        <TabsTrigger value="info">Info</TabsTrigger>
                                    </TabsList>
                                    <TabsContents className="mt-4">
                                        <TabsContent value="code">
                                            <Code code={sampleCode} className="min-h-100">
                                                <CodeHeader icon={FileCode} copyButton>
                                                    {selectedRepo?.name ?? 'Code'}
                                                </CodeHeader>
                                                <CodeBlock lang="tsx" writing />
                                            </Code>
                                        </TabsContent>
                                        <TabsContent value="info">
                                            <div className="p-6 border rounded-lg bg-card min-h-100">
                                                <h3 className="text-lg font-medium mb-2">
                                                    {selectedRepo?.name}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {selectedRepo?.description}
                                                </p>
                                                <a
                                                    href={`https://github.com/${selectedRepo?.owner}/${selectedRepo?.repo}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-4 inline-block text-sm text-primary underline underline-offset-4"
                                                >
                                                    View on GitHub →
                                                </a>
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
