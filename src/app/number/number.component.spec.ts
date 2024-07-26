import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberComponent } from './number.component';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NumberComponent]
    });
    fixture = TestBed.createComponent(NumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should number to be 1 when user click next button', () => {
    component.number = 1;
    component.onClickNextBtn();

    expect(component.number).toBe(2);
  });

  it('should number to be 0 when user click prev button', () => {
    component.number = 1;
    component.onClickPrevBtn();

    expect(component.number).toBe(0);
  });

  it('should number to be 0 when first open the browser', () => {
    expect(component.number).toBe(0);
  })

  it('should max number to be 10 when user click next button', () => {
    component.number = 10;
    component.onClickNextBtn();

    expect(component.onClickNextBtn()).toBe(undefined);
  })

  it('should min number to be 0 when user click prev button', () => {
    component.number = 0;
    component.onClickPrevBtn();

    expect(component.onClickPrevBtn()).toBe(undefined);
  })

  it('should button next default not disable',()=> {
    expect(component.isBtnNextDisable).toBe(false);
  });

  it('should button prev default disable',()=> {
    expect(component.isBtnPrevDisable).toBe(true);
  })

  it('should button next disable when number is 10',()=> {
    component.number = 10;
    component.onClickNextBtn();
    expect(component.isBtnNextDisable).toBe(true);
  });

  it('should button prev disable when number is 0',()=> {
    component.number = 0;
    component.onClickPrevBtn();
    expect(component.isBtnPrevDisable).toBe(true);
  })

});
