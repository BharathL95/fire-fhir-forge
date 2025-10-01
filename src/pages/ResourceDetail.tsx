import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fhirResources } from '@/data/fhirResources';
import { resourceSchemas } from '@/data/resourceSchemas';
import { resourceExamples } from '@/data/resourceExamples';
import { SchemaTree } from '@/components/SchemaTree';
import { JsonViewer } from '@/components/JsonViewer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Flame } from 'lucide-react';

const ResourceDetail = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  const navigate = useNavigate();
  const [highlightedPath, setHighlightedPath] = useState<string | undefined>();

  const resource = fhirResources.find(r => r.id === resourceId);
  const schema = resourceSchemas[resourceId || ''];
  const examples = resourceExamples[resourceId || ''] || [];

  if (!resource || !schema) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource not found</h1>
          <Button onClick={() => navigate('/resources')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Library
          </Button>
        </div>
      </div>
    );
  }

  const handleSchemaClick = (path: string) => {
    setHighlightedPath(path);
  };

  const handleJsonClick = (path: string) => {
    setHighlightedPath(path);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Header */}
      <header className="border-b bg-card shadow-card sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/resources')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg gradient-fire">
                  <Flame className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{resource.name}</h1>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm">
                {resource.category}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(resource.officialUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Official Spec
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Split View */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-180px)]">
          {/* Schema Tree - Left Panel */}
          <div className="overflow-auto">
            <SchemaTree
              elements={schema.elements}
              onElementClick={handleSchemaClick}
              highlightedPath={highlightedPath}
            />
          </div>

          {/* JSON Examples - Right Panel */}
          <div className="overflow-auto">
            <JsonViewer
              examples={examples}
              onPathClick={handleJsonClick}
              highlightedPath={highlightedPath}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResourceDetail;
