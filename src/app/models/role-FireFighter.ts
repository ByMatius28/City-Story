export class RoleFireFighter1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "Fundamental en el contexto de la ciudad.",
      "Está involucrado en: Apagar los incendios de la ciudad",
      "Realiza actividades legales como: Apagar todo tipo de incendios"
    ];
  
    constructor(
      public name: string = 'Edgar',
      public description: string = '',
      public illegalActivities: string[] = ['Incendios']
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
        return 'Fishi Him.';
      }
    }
  
    resetStoryIndex(): void {
      this.storyIndex = 0;
    }
  }
  
  export class RoleFireFighter2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
     "Fundamental en el contexto de la ciudad.",
      "Está involucrado en: Apagar los incendios de la ciudad",
      "Realiza actividades legales como: Apagar todo tipo de incendios"
    ];
  
    constructor(
      public name: string = 'Galo',
      public description: string = '',
      public illegalActivities: string[] = ['Incendios']
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
        return 'Fishi Him.';
      }
    }
  
    resetStoryIndex(): void {
      this.storyIndex = 0;
    }
  }
  