import * as React from 'react';
import {
    FolderItem,
    FolderTrigger,
    FolderContent,
    SubFiles,
    FileItem,
} from '@/components/animate-ui/components/radix/files';
import { type FileNode } from '@/lib/github';
import { getFileIcon } from '@/lib/icon-map';

type FileTreeProps = {
    data: FileNode[];
};

export function FileTree({ data }: FileTreeProps) {
    return (
        <>
            {data.map((node) => {
                if (node.type === 'tree') {
                    return (
                        <FolderItem key={node.path} value={node.path}>
                            <FolderTrigger>{node.name}</FolderTrigger>
                            <FolderContent>
                                <SubFiles>
                                    {node.children && <FileTree data={node.children} />}
                                </SubFiles>
                            </FolderContent>
                        </FolderItem>
                    );
                }

                return (
                    <FileItem key={node.path} icon={getFileIcon(node.name)}>
                        {node.name}
                    </FileItem>
                );
            })}
        </>
    );
}
