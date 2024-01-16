import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovendusBannerComponent } from './sovendus-banner.component';

describe('SovendusBannerComponent', () => {
  let component: SovendusBannerComponent;
  let fixture: ComponentFixture<SovendusBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SovendusBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SovendusBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
