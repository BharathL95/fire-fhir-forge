import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResourceExample } from '@/data/resourceExamples';

interface JsonViewerProps {
  examples: ResourceExample[];
  onPathClick: (path: string) => void;
  highlightedPath?: string;
}

export const JsonViewer = ({ examples, onPathClick, highlightedPath }: JsonViewerProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('simple');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderJsonWithHighlight = (obj: any, parentPath: string = '', level: number = 0): JSX.Element => {
    const indent = '  '.repeat(level);
    const isObject = typeof obj === 'object' && obj !== null && !Array.isArray(obj);
    const isArray = Array.isArray(obj);

    if (isObject) {
      const entries = Object.entries(obj);
      return (
        <>
          <span className="text-muted-foreground">{'{'}</span>
          {'\n'}
          {entries.map(([key, value], index) => {
            const currentPath = parentPath ? `${parentPath}.${key}` : key;
            const isHighlighted = highlightedPath?.includes(currentPath);
            const isLast = index === entries.length - 1;

            return (
              <span key={key}>
                {indent}  
                <span
                  className={`cursor-pointer transition-colors ${
                    isHighlighted 
                      ? 'bg-primary/20 text-primary font-semibold px-1 rounded' 
                      : 'hover:bg-muted text-primary'
                  }`}
                  onClick={() => onPathClick(currentPath)}
                >
                  "{key}"
                </span>
                <span className="text-muted-foreground">: </span>
                {typeof value === 'string' ? (
                  <span className="text-success">"{value}"</span>
                ) : typeof value === 'number' || typeof value === 'boolean' ? (
                  <span className="text-accent">{String(value)}</span>
                ) : (
                  renderJsonWithHighlight(value, currentPath, level + 1)
                )}
                {!isLast && <span className="text-muted-foreground">,</span>}
                {'\n'}
              </span>
            );
          })}
          {indent}
          <span className="text-muted-foreground">{'}'}</span>
        </>
      );
    }

    if (isArray) {
      return (
        <>
          <span className="text-muted-foreground">{'['}</span>
          {'\n'}
          {obj.map((item: any, index: number) => {
            const isLast = index === obj.length - 1;
            return (
              <span key={index}>
                {indent}  
                {typeof item === 'string' ? (
                  <span className="text-success">"{item}"</span>
                ) : typeof item === 'number' || typeof item === 'boolean' ? (
                  <span className="text-accent">{String(item)}</span>
                ) : (
                  renderJsonWithHighlight(item, `${parentPath}[${index}]`, level + 1)
                )}
                {!isLast && <span className="text-muted-foreground">,</span>}
                {'\n'}
              </span>
            );
          })}
          {indent}
          <span className="text-muted-foreground">{']'}</span>
        </>
      );
    }

    return <span>{String(obj)}</span>;
  };

  return (
    <div className="bg-card rounded-lg border shadow-card overflow-hidden h-full flex flex-col">
      <div className="border-b px-4 py-3 flex items-center justify-between sticky top-0 bg-card z-10">
        <h3 className="font-semibold text-sm">Example JSON</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCopy(JSON.stringify(examples.find(e => e.difficulty === activeTab)?.data, null, 2))}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="mx-4 mt-3 space-y-2">
          <div className="text-xs text-muted-foreground">
            Choose complexity level to see different example structures:
          </div>
          <TabsList className="w-full">
            <TabsTrigger value="simple" className="flex-1" title="Basic structure with minimal required fields">
              Simple
            </TabsTrigger>
            <TabsTrigger value="moderate" className="flex-1" title="Common use case with typical fields">
              Moderate
            </TabsTrigger>
            <TabsTrigger value="complex" className="flex-1" title="Advanced example with detailed information">
              Complex
            </TabsTrigger>
          </TabsList>
        </div>

        {examples.map((example) => (
          <TabsContent
            key={example.difficulty}
            value={example.difficulty}
            className="flex-1 min-h-0 m-0 mt-4 overflow-y-auto"
          >
            <pre className="font-mono text-sm p-4 overflow-x-auto">
              {renderJsonWithHighlight(example.data)}
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
