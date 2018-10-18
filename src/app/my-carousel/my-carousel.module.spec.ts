import { MyCarouselModule } from './my-carousel.module';

describe('MyCarouselModule', () => {
  let myCarouselModule: MyCarouselModule;

  beforeEach(() => {
    myCarouselModule = new MyCarouselModule();
  });

  it('should create an instance', () => {
    expect(myCarouselModule).toBeTruthy();
  });
});
