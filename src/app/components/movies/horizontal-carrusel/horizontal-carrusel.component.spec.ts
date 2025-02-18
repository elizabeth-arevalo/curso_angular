import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCarruselComponent } from './horizontal-carrusel.component';

describe('HorizontalCarruselComponent', () => {
  let component: HorizontalCarruselComponent;
  let fixture: ComponentFixture<HorizontalCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
