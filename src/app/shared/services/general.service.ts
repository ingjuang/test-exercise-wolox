import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private paises: any[] = [
    {
      nombrePais: 'Colombia',
    },
    {
      nombrePais: 'Argentina',
    },
    {
      nombrePais: 'Chile',
    },
    {
      nombrePais: 'México',
    },
    {
      nombrePais: 'Perú',
    },
  ];

  private provincias: any[] = [
    {
      nombrePais: 'Colombia',
      nombreProvincia: 'Antioquia'
    },
    {
      nombrePais: 'Colombia',
      nombreProvincia: 'Cundinamarca'
    },
    {
      nombrePais: 'Colombia',
      nombreProvincia: 'Santander'
    },
    {
      nombrePais: 'Colombia',
      nombreProvincia: 'Valle del Cauca'
    },
    {
      nombrePais: 'Colombia',
      nombreProvincia: 'Córdoba'
    },
    {
      nombrePais: 'Argentina',
      nombreProvincia: 'Buenos Aires'
    },
    {
      nombrePais: 'Argentina',
      nombreProvincia: 'Córdoba'
    },
    {
      nombrePais: 'Argentina',
      nombreProvincia: 'Mendoza'
    },
    {
      nombrePais: 'Argentina',
      nombreProvincia: 'San Juan'
    },
    {
      nombrePais: 'Argentina',
      nombreProvincia: 'Santa Cruz'
    },
    {
      nombrePais: 'Chile',
      nombreProvincia: 'Santiago'
    },
    {
      nombrePais: 'Chile',
      nombreProvincia: 'Arica'
    },
    {
      nombrePais: 'Chile',
      nombreProvincia: 'Copiapo'
    },
    {
      nombrePais: 'Chile',
      nombreProvincia: 'Concepcion'
    },
    {
      nombrePais: 'Chile',
      nombreProvincia: 'Taica'
    },
    {
      nombrePais: 'México',
      nombreProvincia: 'Distrito Federal'
    },
    {
      nombrePais: 'México',
      nombreProvincia: 'Sinaloa'
    },
    {
      nombrePais: 'México',
      nombreProvincia: 'Nuevo León'
    },
    {
      nombrePais: 'México',
      nombreProvincia: 'Puebla'
    },
    {
      nombrePais: 'México',
      nombreProvincia: 'Jalisco'
    },
    {
      nombrePais: 'Perú',
      nombreProvincia: 'Lima'
    },
    {
      nombrePais: 'Perú',
      nombreProvincia: 'Loreto'
    },
    {
      nombrePais: 'Perú',
      nombreProvincia: 'Amazonas'
    },
    {
      nombrePais: 'Perú',
      nombreProvincia: 'San Martin'
    },
    {
      nombrePais: 'Perú',
      nombreProvincia: 'Arequipa'
    }
  ]

  constructor() {}

  getPaises(){
    return this.paises;
  }

  getProvinciasByPais(pais: string){
    return this.provincias.filter(el => el.nombrePais === pais);
  }
}
