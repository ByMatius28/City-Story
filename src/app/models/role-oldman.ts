export class RoleOldMan1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      " Jose es fundamental en las ventas del doctor.",
      " Jose  está involucrado en: Compra de medicamentos",
      " Jose realiza actividades legales como: consumo de medicamentos."
    ];
  
    constructor(
      public name: string = ' Jose',
      public description: string = '',
      public illegalActivities: string[] = ['Actividad legal']
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
      this.storyIndex = 0; // Reinicia el índice de la historia
    }
  }
  
  export class RoleOldMan2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "Antonio es fundamental en el contexto de las ventas del kevin y braian.",
      "Antonio está involucrado en: el consumo de sustancias ilicitas",
      "Antonio realiza actividades ilegales como: Actividad ilegal"
    ];
  
    constructor(
      public name: string = 'Antonio',
      public description: string = '',
      public illegalActivities: string[] = ['Actividad ilegal']
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
  