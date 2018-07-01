import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
/*
sratement: instruccion logica de cada lenguaje let var = algo
npm run coverage correr covertura
describe('When the method is called', () => {
  it('should mass edit configto be setted using global info ', () => {
    component.massEditConfig = null;
    component.acountId = 'accountId';
    component.deploymentId = 'deploymentId';
    component.params = {values: {}};
    component.setupMassEditConfig();
    expect(component.massEditConfig.acountId).toEqual('accountid');
    expect(component.massEditConfig.deploymentId).toEqual('deploymentId');
    expect(component.massEditConfig.items_count).toEqual(0);
    expect(component.massEditConfig.params).toEqual({values: {}});
  });
});

describe('when the method on search is called ', () => {
  it('params of set validated in a method ', () => {
    component. params.offset= 'algo',
      component.params.search = 'algo 2';
    spyOn(component, 'LoadData');
    component.onSearch('value');

    expect(component.params.offset).toEqual(0);
    expect(component.params.search).toEqual('value');
    expect(component.loadData).toHaveBeenCalledTimes(1);
    expect(component.loadData).toHaveBeenCalledWith('all');

  };
  });
});


Clase 2 pruebss

fdescribe('test the fuction on filter ', () => {
  it('onfilter fuction ',() => {
    component.params.offset = null;
    component.params.filter = null;
    let filterids =['123','456'];
    spyOn<any>(component.UtilityService, 'getfiltersparams').and.returnValue('efren');
    spyOn<any>(component['-UtilityService'], 'getfiltersparams').and.returnValue('efren');
    spyOn(component, 'LoadData');
    component.onfilter(filterids);
    expect(component.params.offset).toEqual(0);
    expect(component.params.filter).toEqual('efren');
    expect(component.loadData).toHaveBeenCalledTimes(1);
    expect(component.loadData).toHaveBeenCalledWith('all');
    expect(component['_UtilityService'], getfilterparams).toHaveBeenCalledWith(['123','456']);
  });
});
*/

