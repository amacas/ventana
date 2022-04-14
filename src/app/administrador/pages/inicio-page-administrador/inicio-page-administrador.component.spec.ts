import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPageAdministradorComponent } from './inicio-page-administrador.component';

describe('InicioPageAdministradorComponent', () => {
  let component: InicioPageAdministradorComponent;
  let fixture: ComponentFixture<InicioPageAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPageAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPageAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
