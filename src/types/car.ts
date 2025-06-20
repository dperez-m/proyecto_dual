export interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
  battery_range: number;
  power: number;
  category: string;
  image_url: string;
  drivetrain?: string;
  seats?: number;
  trunk_capacity?: number;
  fast_charging_power?: number;
}
