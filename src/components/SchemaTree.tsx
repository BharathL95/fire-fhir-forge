import { useState } from 'react';
import { ChevronRight, ChevronDown, AlertCircle, Info } from 'lucide-react';
import { SchemaElement } from '@/data/resourceSchemas';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SchemaTreeProps {
  elements: SchemaElement[];
  onElementClick: (path: string) => void;
  highlightedPath?: string;
}

interface SchemaNodeProps {
  element: SchemaElement;
  level: number;
  onElementClick: (path: string) => void;
  highlightedPath?: string;
}

const SchemaNode = ({ element, level, onElementClick, highlightedPath }: SchemaNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const hasChildren = element.children && element.children.length > 0;
  const isHighlighted = highlightedPath === element.path;

  return (
    <div className="select-none">
      <div
        className={`flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-smooth hover:bg-muted/50 ${
          isHighlighted ? 'bg-primary/10 ring-2 ring-primary/20' : ''
        }`}
        style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
        onClick={() => {
          if (hasChildren) setIsExpanded(!isExpanded);
          onElementClick(element.path);
        }}
      >
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
          )
        ) : (
          <div className="w-4" />
        )}

        <code className="font-mono text-sm font-medium text-foreground">{element.name}</code>

        {element.isRequired && (
          <Badge variant="destructive" className="text-xs px-1.5 py-0">
            required
          </Badge>
        )}

        <span className="text-xs text-muted-foreground font-mono ml-auto">
          {element.dataType}
        </span>

        <Badge variant="outline" className="text-xs px-2 py-0">
          {element.cardinality}
        </Badge>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-xs">
              <p className="text-sm">{element.description}</p>
              <p className="text-xs text-muted-foreground mt-2">Path: {element.path}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {hasChildren && isExpanded && (
        <div>
          {element.children!.map((child) => (
            <SchemaNode
              key={child.path}
              element={child}
              level={level + 1}
              onElementClick={onElementClick}
              highlightedPath={highlightedPath}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const SchemaTree = ({ elements, onElementClick, highlightedPath }: SchemaTreeProps) => {
  return (
    <div className="bg-card rounded-lg border shadow-card overflow-auto">
      <div className="sticky top-0 bg-card border-b px-4 py-3 z-10">
        <h3 className="font-semibold text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-primary" />
          Resource Schema
        </h3>
      </div>
      <div className="p-2">
        {elements.map((element) => (
          <SchemaNode
            key={element.path}
            element={element}
            level={0}
            onElementClick={onElementClick}
            highlightedPath={highlightedPath}
          />
        ))}
      </div>
    </div>
  );
};
