export class RoleNarco1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "Fundamental en el contexto de la organizacion",
      "Está involucrado en: Trafico de drogas",
      "Realiza actividades ilegales como: Trafico, Vandalismo, Omicidios."
    ];
  
    constructor(
      public name: string = 'Jh',
      public description: string = '',
      public illegalActivities: string[] = ['Robo', 'Vandalismo','Omicidios']
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
  
  export class RoleNarco2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "El rol de RoleFriend2 es fundamental en el contexto de la ciudad.",
      "RoleFriend2 está involucrado en: Descripción del Amigo 2.",
      "RoleFriend2 realiza actividades ilegales como: Robo, Vandalismo, Omicidios."
    ];
  
    constructor(
      public name: string = 'Nixon',
      public description: string = '',
      public illegalActivities: string[] = ['Robo', 'Vandalismo','Omicidios']
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
  