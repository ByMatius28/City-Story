export class RolePolice1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "El rol de RolePolice es fundamental en el contexto de la ciudad.",
      "Policia está involucrado en: Descripción del Policia",
      "Policia realiza actividades legales como: Investigar a los narcos y los dealers"
    ];
  
    constructor(
      public name: string = 'Policia Toledo',
      public description: string = '',
      public illegalActivities: string[] = ['Investigar a los narcos y los dealers']
    ) {}
  
    introduce(): string {
      return this.storyParts[0];
    }
  
    displayDescription(): string {
      if (this.storyIndex >= 1) {
        return this.storyParts[1];
      } else {
        return '';
      }
    }
  
    displayIllegalActivities(): string {
      if (this.storyIndex >= 2) {
        return this.storyParts[2];
      } else {
        return '';
      }
    }
  
    displayNextPart(): string {
      if (this.storyIndex < this.storyParts.length) {
        return this.storyParts[this.storyIndex++];
      } else {
        return 'Fin de la historia.';
      }
    }
  
    resetStoryIndex(): void {
      this.storyIndex = 0;
    }
  }
  
  export class RolePolice2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "El rol de General Policia es fundamental en el contexto de la ciudad.",
      "General Policia está involucrado en: Controla la policia de la ciudad",
      "General Policia realiza actividades ilegales como: Ordena a los demas rangos que hacer en al ciudad"
    ];
  
    constructor(
      public name: string = 'General Andersen',
      public description: string = '',
      public illegalActivities: string[] = ['Ordena a los demas rangos que hacer en al ciudad']
    ) {}
  
    introduce(): string {
      return this.storyParts[0];
    }
  
    displayDescription(): string {
      if (this.storyIndex >= 1) {
        return this.storyParts[1];
      } else {
        return '';
      }
    }
  
    displayIllegalActivities(): string {
      if (this.storyIndex >= 2) {
        return this.storyParts[2];
      } else {
        return '';
      }
    }
  
    displayNextPart(): string {
      if (this.storyIndex < this.storyParts.length) {
        return this.storyParts[this.storyIndex++];
      } else {
        return 'Fin de la historia.';
      }
    }
  
    resetStoryIndex(): void {
      this.storyIndex = 0;
    }
  }