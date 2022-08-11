import { TestBed } from '@angular/core/testing';
import {HelloComponent} from "./hello.component";

describe('HelloComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HelloComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HelloComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render second p', () => {
    const fixture = TestBed.createComponent(HelloComponent);
    fixture.componentInstance.name = 'BlaBla';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello BlaBla!');
  });
});
