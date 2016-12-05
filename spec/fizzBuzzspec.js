describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should test for divisibility by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBeTruthy();
  });

  it("should test for indivisibilty by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(5)).toBeFalsy();
  });

  it("should test for divisibility by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBeTruthy();
  });

});
