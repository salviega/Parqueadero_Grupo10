import {Entity, model, property} from '@loopback/repository';

@model()
export class Local extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  ReferenciaComercial: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreLocal: string;

  @property({
    type: 'string',
    required: true,
  })
  Acrealocal: string;

  @property({
    type: 'string',
    required: true,
  })
  Ubicacion: string;


  constructor(data?: Partial<Local>) {
    super(data);
  }
}

export interface LocalRelations {
  // describe navigational properties here
}

export type LocalWithRelations = Local & LocalRelations;
