describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should test for divisibility by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  }
);

});
