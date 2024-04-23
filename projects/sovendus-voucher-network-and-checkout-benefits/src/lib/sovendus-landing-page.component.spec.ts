import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovendusLandingPageComponent } from './sovendus-landing-page.component';

describe('SovendusLandingPageComponent', () => {
  let component: SovendusLandingPageComponent;
  let fixture: ComponentFixture<SovendusLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SovendusLandingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SovendusLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
