import {OpenstreetmapTileLayerStrategy} from "./openstreetmapTileLayer.strategy";

describe("OpenstreetmapTileLayerStrategy", () => {
  let sut: OpenstreetmapTileLayerStrategy;

  beforeEach(() => {
    sut = new OpenstreetmapTileLayerStrategy();
  });

  it("should create", () => {
    expect(sut).toBeDefined();
    expect(sut).toBeInstanceOf(OpenstreetmapTileLayerStrategy);
  });
});
