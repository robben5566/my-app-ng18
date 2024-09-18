import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let vi = 'AĂÂBCDĐEÊGHIKLMNOÔƠPQRSTUƯVXYaăâbcdđeêghiklmnoôơpqrstuưvxy'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });
  // it(`should have the 'my-app-ng18' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('my-app-ng18');
  // });

  it('[pass] vi', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const inputEle = compiled.querySelector('input');
    inputEle!.value = vi;
    inputEle!.dispatchEvent(new Event('input'));

    expect(compiled.querySelector('h2')?.textContent).toContain(vi);
  });

  it('[fail] ❤️', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const inputEle = compiled.querySelector('input');
    inputEle!.value = '❤️';
    inputEle!.dispatchEvent(new Event('input'));

    expect(compiled.querySelector('p')?.textContent).toContain('Error');
  });


});
