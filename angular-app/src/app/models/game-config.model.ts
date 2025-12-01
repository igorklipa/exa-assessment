export interface GameConfig {
  id?: number;
  name: string;
  description?: string;
  odds: number;
  status: 'active' | 'inactive';
  createdAt?: Date;
}