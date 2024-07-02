export class RoleNurse1 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "El rol de enfermera es fundamental en el contexto de la ciudad.",
      "Enfermera está involucrado en: Descripción del RolePolice",
      "Emfermera realiza actividades legales como: Cuidar a los viejitos"
    ];
  
    constructor(
      public name: string = 'Maria',
      public description: string = '',
      public illegalActivities: string[] = ['Cuidar a los viejitos']
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
  
  export class RoleNurse2 {
    private storyIndex: number = 0;
    private storyParts: string[] = [
      "El rol de enfermera es fundamental en el contexto de la ciudad.",
      "Enfermera está involucrado en: Descripción del RolePolice",
      "Emfermera realiza actividades legales como: Cuidar a los viejitos"
    ];
  
    constructor(
      public name: string = 'Gabriela',
      public description: string = '',
      public illegalActivities: string[] = ['Cuidar a los viejitos']
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