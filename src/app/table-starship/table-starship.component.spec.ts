import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStarshipComponent } from './table-starship.component';

describe('TableStarshipComponent', () => {
  let component: TableStarshipComponent;
  let fixture: ComponentFixture<TableStarshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableStarshipComponent]
    });
    fixture = TestBed.createComponent(TableStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
