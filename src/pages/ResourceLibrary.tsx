import { useState } from 'react';
import { fhirResources, FHIRResource } from '@/data/fhirResources';
import { ResourceCard } from '@/components/ResourceCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Flame } from 'lucide-react';

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(fhirResources.map(r => r.category)));

  const filteredResources = fhirResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const resourcesByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredResources.filter(r => r.category === category);
    return acc;
  }, {} as Record<string, FHIRResource[]>);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg gradient-fire">
              <Flame className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Resource Library</h1>
          </div>
          
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search resources by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge
            variant={selectedCategory === null ? 'default' : 'outline'}
            className="cursor-pointer transition-smooth hover:scale-105"
            onClick={() => setSelectedCategory(null)}
          >
            All Resources ({fhirResources.length})
          </Badge>
          {categories.map(category => {
            const count = fhirResources.filter(r => r.category === category).length;
            return (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer transition-smooth hover:scale-105"
                onClick={() => setSelectedCategory(category)}
              >
                {category} ({count})
              </Badge>
            );
          })}
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No resources found matching your search
            </p>
          </div>
        ) : (
          <>
            {selectedCategory === null ? (
              // Show all categories
              categories.map(category => {
                const categoryResources = resourcesByCategory[category];
                if (categoryResources.length === 0) return null;
                
                return (
                  <div key={category} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span>{category}</span>
                      <Badge variant="secondary">{categoryResources.length}</Badge>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryResources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              // Show selected category only
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ResourceLibrary;
