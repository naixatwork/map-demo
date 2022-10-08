import {LeafletInitializeMapStrategy} from "./leaflet-initialize-map.strategy";

describe("LeafletInitializeMapStrategy", () => {
  let sut: LeafletInitializeMapStrategy;

  beforeEach(() => {
    sut = new LeafletInitializeMapStrategy();
  });

  it("should create", () => {
    expect(sut).toBeTruthy();
    expect(sut).toBeInstanceOf(LeafletInitializeMapStrategy);
  })

  it("should return an object on #initializeMap()", () => {
    const map = sut.initializeMap(document.createElement('div'));
    expect(map).toBeTruthy();
  });
})
