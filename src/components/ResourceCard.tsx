import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FHIRResource, getCategoryColor } from '@/data/fhirResources';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  resource: FHIRResource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const navigate = useNavigate();
  const IconComponent = (Icons[resource.icon as keyof typeof Icons] as LucideIcon) || Icons.FileText;

  return (
    <Card 
      className="group p-6 cursor-pointer transition-smooth hover:shadow-elevation hover:scale-[1.02] border-2"
      onClick={() => navigate(`/resources/${resource.id}`)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg gradient-fire shrink-0">
          <IconComponent className="w-6 h-6 text-primary-foreground" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
              {resource.name}
            </h3>
          </div>
          
          <Badge variant="secondary" className={`mb-3 ${getCategoryColor(resource.category)}`}>
            {resource.category}
          </Badge>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {resource.description}
          </p>
        </div>
      </div>
    </Card>
  );
};
