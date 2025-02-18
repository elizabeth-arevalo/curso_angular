import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterCarruselComponent } from './poster-carrusel.component';

describe('PosterCarruselComponent', () => {
  let component: PosterCarruselComponent;
  let fixture: ComponentFixture<PosterCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
