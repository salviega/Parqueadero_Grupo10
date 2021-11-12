import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  Color: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoVisual: string;

  @property({
    type: 'string',
    required: true,
  })
  Soat: string;


  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
