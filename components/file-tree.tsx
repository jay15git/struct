import * as React from 'react';
import {
    FileCode2,
    FileJson,
    FileText,
    FileType2,
    FileBadge2,
    FileImage,
    FileIcon,
} from 'lucide-react';
import {
    FolderItem,
    FolderTrigger,
    FolderContent,
    SubFiles,
    FileItem,
} from '@/components/animate-ui/components/radix/files';
import { type FileNode } from '@/lib/github';

type FileTreeProps = {
    data: FileNode[];
};

const getFileIcon = (name: string) => {
    const extension = name.split('.').pop()?.toLowerCase();
    switch (extension) {
        case 'ts':
        case 'tsx':
        case 'js':
        case 'jsx':
            return FileCode2;
        case 'json':
            return FileJson;
        case 'md':
        case 'txt':
            return FileText;
        case 'css':
        case 'scss':
            return FileType2;
        case 'svg':
        case 'png':
        case 'jpg':
        case 'jpeg':
            return FileImage;
        case 'config':
        case 'lock':
            return FileBadge2;
        default:
            return FileIcon;
    }
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
