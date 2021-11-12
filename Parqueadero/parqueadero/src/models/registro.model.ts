import {Entity, model, property} from '@loopback/repository';

@model()
export class Registro extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Placa: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaVisita: string;

  @property({
    type: 'string',
    required: true,
  })
  Tiempo: string;

  @property({
    type: 'string',
    required: true,
  })
  Lugar: string;


  constructor(data?: Partial<Registro>) {
    super(data);
  }
}

export interface RegistroRelations {
  // describe navigational properties here
}

export type RegistroWithRelations = Registro & RegistroRelations;
