import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlanetComponent } from './table-planet.component';

describe('TablePlanetComponent', () => {
  let component: TablePlanetComponent;
  let fixture: ComponentFixture<TablePlanetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePlanetComponent]
    });
    fixture = TestBed.createComponent(TablePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
