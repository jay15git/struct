export type FileNode = {
  name: string;
  path: string;
  type: 'tree' | 'blob';
  children?: FileNode[];
};

export async function getRepoTree(
  owner: string,
  repo: string,
  branch: string = 'main'
): Promise<FileNode[]> {
  const url = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch repo tree: ${response.statusText}`);
  }

  const data = await response.json();
  return buildTree(data.tree);
}

function buildTree(files: any[]): FileNode[] {
  const root: FileNode[] = [];
  const map: Record<string, FileNode> = {};

  // First pass: create all nodes
  files.forEach((file) => {
    const parts = file.path.split('/');
    const name = parts[parts.length - 1];
    const node: FileNode = {
      name,
      path: file.path,
      type: file.type === 'tree' ? 'tree' : 'blob',
    };
    if (node.type === 'tree') {
      node.children = [];
    }
    map[file.path] = node;
  });

  // Second pass: build hierarchy
  files.forEach((file) => {
    const node = map[file.path];
    const parts = file.path.split('/');
    if (parts.length === 1) {
      root.push(node);
    } else {
      const parentPath = parts.slice(0, -1).join('/');
      const parent = map[parentPath];
      if (parent && parent.children) {
        parent.children.push(node);
      }
    }
  });

  // Sort: folders first, then alphabetically
  const sortNodes = (nodes: FileNode[]) => {
    nodes.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'tree' ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });
    nodes.forEach((node) => {
      if (node.children) {
        sortNodes(node.children);
      }
    });
  };

  sortNodes(root);
  return root;
}
