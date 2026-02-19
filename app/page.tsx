'use client';

import * as React from 'react';
import { Files } from "@/components/animate-ui/components/radix/files";
import { FileTree } from "@/components/file-tree";
import { getRepoTree, type FileNode } from "@/lib/github";

const page = () => {
  const [data, setData] = React.useState<FileNode[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Defaulting to tw-animate-css for demonstration
        const tree = await getRepoTree('Wombosvideo', 'tw-animate-css');
        setData(tree);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading repository structure...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">GitHub Repo Structure</h1>
      <div className="border rounded-xl overflow-hidden shadow-sm bg-card">
        <Files>
          <FileTree data={data} />
        </Files>
      </div>
    </div>
  );
}

export default page;